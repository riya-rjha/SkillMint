import { useParams } from 'react-router-dom';
import courses from './shared/CourseDetails.json'
import toast from 'react-hot-toast';
import {
	Wallet,
  	Play,
  	Lock,
	ShoppingCart,
	AlertCircle,
	CheckCircle2,
	Loader,
} from "lucide-react";
import React, { useContext, useRef} from 'react';
import { AppContext } from '../context/AppContext.jsx';
function CourseDetail() {

	const videoRef = useRef(null);

	const handlePlayVideo = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

    const {
			account,
			setAccount,
			contract,
			setContract,
			loading,
			setLoading,
			error,
			setError,
			success,
			setSuccess,
			purchasedCourses,
			setPurchasedCourses,
			coursePrices,
			setCoursePrices,
		} = useContext(AppContext);

  const purchaseCourse = async (courseId) => {
		try {
			setLoading(true);
			// const purchaseToast = toast.loading("Processing purchase...");

			const price = coursePrices[courseId];

			const tx = await contract.purchaseCourse(courseId, {
				value: price,
			});

			await tx.wait();

			// Update the purchased status for this course
			setPurchasedCourses((prev) => ({
				...prev,
				[courseId]: true,
			}));

			// toast.success(`Successfully purchased course ${id}!`, {
			// 	id: purchaseToast,
			// });
		} catch (err) {
			// toast.error("Failed to purchase course: " + err.message);
		} finally {
			setLoading(false);
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
						<h2 className='text-xl font-semibold mb-4'>About This Course</h2>
						<p className='text-gray-400'>{courseInfo.description}</p>
					</div>

					<div className='space-y-4'>
						{courseInfo.modules.map((module, index) => (
							<div
								key={index}
								className='bg-gray-900 border border-gray-800 rounded-lg p-6'
							>
								<h3 className='text-lg font-semibold mb-4'>{module.title}</h3>
								<ul className='space-y-2'>
									{module.lessons.map((lesson, lessonIndex) => (
										<li key={lessonIndex} className='text-gray-400'>
											• {lesson}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* <div className='bg-gray-900 border border-gray-800 rounded-lg p-6 mt-8'>
						<h2 className='text-xl font-semibold mb-4'>Course Videos</h2>
						<p className='text-gray-400'>{courseInfo.description}</p>
					</div> */}

					<div className='bg-gray-900 border border-gray-800 rounded-lg p-6 mt-4'>
						<h2 className='text-2xl font-bold mb-4'>Course Videos</h2>
						<div className='flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors'>
							<span className='text-gray-700'>Introduction to the Course</span>
							{purchasedCourses[id] ? (
								<Play className=' cursor-pointer text-gray-500' size={20} />
							) : (
								<Lock
									onClick={handlePlayVideo}
									className=' cursor-pointer text-gray-500'
									size={20}
								/>
							)}
						</div>
						<video width='600' controls>
							<source
								src='./cpp.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>

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