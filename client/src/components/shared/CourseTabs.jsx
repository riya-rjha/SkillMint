import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseTabs = () => {
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



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <div
        key={course.id}
        className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
        onClick={() => window.location.href = `/course/${course.id}`}
>
          <div className="relative pb-[56.25%] mb-4">
            <img
              src={course.imgUrl}
              alt={course.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">{course.title}</h2>
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-400">By {course.instructor}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-1 text-white">{course.rating}</span>
              <span className="ml-2 text-sm text-gray-400">({course.reviews} reviews)</span>
            </div>
            <span className="text-lg font-bold text-white">{course.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTabs;
