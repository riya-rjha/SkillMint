import { useParams } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import courses from "./shared/CourseDetails.json";
import {
	Play,
	Lock,
	ShoppingCart,
	CheckCircle2,
	Loader,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";

function CourseDetail() {
	const [videoVisible, setVideoVisible] = useState({});
	const videoRef = useRef(null);

	const {
		loading,
		purchasedCourses,
		setPurchasedCourses,
		coursePrices,
		contract,
	} = useContext(AppContext);

	const toggleVideo = (lessonIndex) => {
		setVideoVisible((prev) => ({
			...prev,
			[lessonIndex]: !prev[lessonIndex],
		}));
	};

	const purchaseCourse = async (courseId) => {
		try {
			const price = coursePrices[courseId];
			const tx = await contract.purchaseCourse(courseId, {
				value: price,
			});
			await tx.wait();
			setPurchasedCourses((prev) => ({
				...prev,
				[courseId]: true,
			}));
		} catch (err) {
			console.error("Failed to purchase course:", err);
		}
	};

	const { id } = useParams();
	const courseInfo = courses.find((course) => course.id == id);

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				<div className='lg:col-span-2'>
					<h1 className='text-4xl font-bold mb-4'>{courseInfo.title}</h1>
					<div className='flex items-center space-x-4 mb-6'>
						<img
							src='https://via.placeholder.com/40'
							alt='Instructor'
							className='rounded-full'
						/>
						<div>
							<p className='text-[#3FA37A]'>{courseInfo.instructor}</p>
							<div className='flex items-center'>
								<span className='text-yellow-400'>★★★★★</span>
								<span className='ml-2'>{courseInfo.rating}</span>
								<span className='ml-4 text-gray-400'>
									{courseInfo.students} students
								</span>
							</div>
						</div>
					</div>

					<div className='bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8'>
						<h2 className='text-2xl font-semibold mb-4'>About This Course</h2>
						<p className='text-gray-400 text-lg'>{courseInfo.description}</p>
					</div>

					{/* Course videos section */}
					<div className='bg-gray-900 border border-gray-800 rounded-lg p-6 mt-4'>
						<h2 className='text-2xl font-bold mb-4'>Course Videos</h2>
						{courseInfo.modules.map((module, moduleIndex) => (
							<div key={moduleIndex} className='mb-6'>
								<h3 className='text-lg font-semibold mb-2'>{module.title}</h3>
								{module.lessons.map((lesson, lessonIndex) => (
									<div key={lessonIndex} className='mb-4'>
										<div
											className='flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer'
											onClick={() =>
												purchasedCourses[id] && toggleVideo(lessonIndex)
											}
										>
											<span className='text-gray-200'>{lesson}</span>
											{purchasedCourses[id] ? (
												videoVisible[lessonIndex] ? (
													<ChevronUp className='text-gray-400' size={20} />
												) : (
													<ChevronDown className='text-gray-400' size={20} />
												)
											) : (
												<Lock className='text-gray-400' size={20} />
											)}
										</div>

										{/* Video dropdown */}
										<div
											className={`transition-all duration-300 ease-in-out overflow-hidden ${
												videoVisible[lessonIndex] ? "max-h-96 mt-4" : "max-h-0"
											}`}
										>
											<video
												width='100%'
												controls
												className='rounded-lg'
												ref={videoRef}
											>
												<source src='./cpp.mp4' type='video/mp4' />
												Your browser does not support the video tag.
											</video>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>

				{/* Right sidebar */}
				<div className='lg:col-span-1'>
					<div className='bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-4'>
						<img
							src={courseInfo.imgUrl}
							alt='Course preview'
							className='w-full rounded-lg mb-4'
						/>
						<div className='text-3xl font-bold mb-6'>{courseInfo.price}</div>
						<button
							onClick={() => purchaseCourse(id)}
							disabled={loading || purchasedCourses[id]}
							className={`w-full p-2 rounded-md flex items-center justify-center ${
								purchasedCourses[id]
									? "bg-gray-300 text-gray-600 cursor-not-allowed"
									: "bg-[#269768] text-white hover:bg-[#2d7457] transition-all"
							}`}
						>
							{loading ? (
								<>
									<Loader className='animate-spin mr-2' />
									Processing...
								</>
							) : purchasedCourses[id] ? (
								<>
									<CheckCircle2 className='mr-2' />
									Purchased
								</>
							) : (
								<>
									<ShoppingCart className='mr-2' />
									Buy Course
								</>
							)}
						</button>
						<p className='text-sm text-gray-400 text-center mt-3'>
							30-day money-back guarantee
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseDetail;
