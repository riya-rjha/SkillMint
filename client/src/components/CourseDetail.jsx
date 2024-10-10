import { useParams } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import MintCertificateButton from "./MintCertificateButton.jsx";
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
	const videoRefs = useRef({});
	const courses = [
		{
			id: 1,
			title:
				"Data Structures & Algorithms Mastery in Java: From Basics to Advanced",
			imgUrl:
				"https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252417.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
			instructor: "Michael Chen",
			rating: 4.5,
			students: 125,
			video:
				"https://drive.google.com/file/d/137e4vr6_PkSJlLR8GUV5pWfFsgpeEA-H/preview",
			price: "0.012 ETH",
			description:
				"Become a master in data structures and algorithms using Java, starting from basics to advanced concepts.",
			modules: [
				{
					title: "Introduction to Java Data Structures",
					lessons: ["Basics of Java Collections", "Arrays and Lists in Java"],
				},
				{
					title: "Advanced Algorithms",
					lessons: ["Graph Theory", "Dynamic Programming"],
				},
			],
			profilePic:
				"https://img.freepik.com/premium-photo/business-man-pointing-something-him-smiling-camera-white-background_564692-56569.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
		},
		{
			id: 2,
			title: "Comprehensive Data Structures & Algorithms Course: C++ Edition",
			imgUrl:
				"https://img.freepik.com/premium-photo/laptop-with-word-code-screen-is-open-word-code-is-screen_1077470-2841.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
			instructor: "Sagar Patel",
			rating: 4.7,
			students: 200,
			video:
				"https://drive.google.com/file/d/1v4OeREJh71a4R47G_lY8o6mCRpNKrArS/preview",
			price: "0.01 ETH",
			description:
				"Master data structures and algorithms using C++, with step-by-step lessons from basics to advanced concepts.",
			modules: [
				{
					title: "Introduction to C++ Data Structures",
					lessons: [
						"C++ Standard Template Library (STL)",
						"Arrays, Stacks, and Queues in C++",
					],
				},
				{
					title: "Advanced Algorithms in C++",
					lessons: ["Greedy Algorithms", "Backtracking and Recursion"],
				},
			],
			profilePic:
				"https://img.freepik.com/premium-photo/smiling-young-male-professional-standing-with-his-arms-crossed-making-eye-contact-against_951300-216.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
		},
		{
			id: 3,
			title: "React.js Professional Bootcamp: Building Modern Web Applications",
			imgUrl:
				"https://img.freepik.com/premium-photo/laptop-screen-displaying-blockchain-code-surrounded-by-coffee-cup-notepad-stylized-crypto_894218-35810.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
			instructor: "Popye Rodriguez",
			rating: 4.8,
			video:
				"https://drive.google.com/file/d/1IeYFv4_PTJw7w8RzOLNXSK2mTMUKff1a/preview",
			students: 300,
			price: "0.016 ETH",
			description:
				"Learn to build professional-grade web applications using React.js in this comprehensive bootcamp.",
			modules: [
				{
					title: "React Basics",
					lessons: ["JSX and Components", "State and Props in React"],
				},
				{
					title: "Advanced React Concepts",
					lessons: ["React Hooks", "Managing State with Redux"],
				},
			],
			profilePic:
				"https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
		},
		{
			id: 4,
			title:
				"Full Stack Web Development with Python: Django & Flask Masterclass",
			imgUrl:
				"https://img.freepik.com/premium-photo/laptop-screen-displaying-blockchain-code-surrounded-by-coffee-cup-notepad-stylized-crypto_894218-35825.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
			instructor: "David Kim",
			video:
				"https://drive.google.com/file/d/1zFeig7WKSS-3e2sjkdq2D0qupjBLTqD1/preview",
			rating: 4.6,
			students: 150,
			price: "0.008 ETH",
			description:
				"Master full-stack web development with Python, learning Django and Flask to build powerful applications.",
			modules: [
				{
					title: "Introduction to Flask",
					lessons: [
						"Building a Simple Web App with Flask",
						"Flask Templates and Forms",
					],
				},
				{
					title: "Advanced Django",
					lessons: [
						"Building RESTful APIs with Django",
						"Database Integration with Django ORM",
					],
				},
			],
			profilePic:
				"https://img.freepik.com/premium-photo/httpssmjrunqa-pl0patcu-18-years-old-young-girl-long-wavy-black-hair-wearing-white-office-clothes_1107779-28624.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
		},
		{
			id: 5,
			title:
				"Machine Learning Foundations: From Theory to Real-World Applications",
			imgUrl:
				"https://img.freepik.com/free-photo/young-adult-programmer-typing-computer-office-generated-by-ai_188544-20410.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
			instructor: "Dr. Sophia Nguyen",
			rating: 4.9,
			students: 500,
			video:
				"https://drive.google.com/file/d/1uiZtmhGqwdV_L-otKGnlo6pTMCTHe2ac/preview",
			price: "0.02 ETH",
			description:
				"Gain a strong foundation in machine learning, from theory to implementing real-world applications.",
			modules: [
				{
					title: "Introduction to Machine Learning",
					lessons: [
						"Understanding Machine Learning Concepts",
						"Supervised vs Unsupervised Learning",
					],
				},
				{
					title: "Building Machine Learning Models",
					lessons: ["Linear Regression", "Neural Networks and Deep Learning"],
				},
			],
			profilePic:
				"https://img.freepik.com/free-photo/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow_158538-15796.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
		},
	];



	const {
		loading,
		setLoading,
		purchasedCourses,
		setPurchasedCourses,
		coursePrices,
		contract,
	} = useContext(AppContext);


	const toggleVideo = (moduleIndex, lessonIndex) => {
		setVideoVisible((prev) => ({
			...prev,
			[moduleIndex]: {
				...prev[moduleIndex],
				[lessonIndex]: !prev[moduleIndex]?.[lessonIndex],
			},
		}));
	};

	const isVideoVisible = (moduleIndex, lessonIndex) => {
		return videoVisible[moduleIndex]?.[lessonIndex] || false;
	};

	const purchaseCourse = async (courseId) => {
		try {
			setLoading(true)
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
		finally{
			setLoading(false)
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
							src={courseInfo.profilePic}
							alt='Instructor'
							className='rounded-full'
							width={40}
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
												purchasedCourses[id] &&
												toggleVideo(moduleIndex, lessonIndex)
											}
										>
											<span className='text-gray-200'>{lesson}</span>
											{purchasedCourses[id] ? (
												isVideoVisible(moduleIndex, lessonIndex) ? (
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
												isVideoVisible(moduleIndex, lessonIndex)
													? "max-h-96 mt-4"
													: "max-h-0"
											}`}
										>
											<iframe
												src={courseInfo.video}
												width='100%'
												height='360'
												allow='autoplay'
											></iframe>
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
						<MintCertificateButton />
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
