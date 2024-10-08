const CourseTest = () => {
  return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{[1, 2, 3, 4, 5].map((courseId) => (
				<div key={courseId} className='border rounded-md p-4'>
					<h3 className='text-lg font-semibold mb-2'>Course {courseId}</h3>
					<p className='text-gray-600 mb-2'>
						Price: {formatPrice(coursePrices[courseId])}
					</p>
					<button
						onClick={() => purchaseCourse(courseId)}
						disabled={loading || purchasedCourses[courseId]}
						className={`w-full p-2 rounded-md flex items-center justify-center ${
							purchasedCourses[courseId]
								? "bg-gray-300 text-gray-600 cursor-not-allowed"
								: "bg-green-500 text-white hover:bg-green-600"
						}`}
					>
						{loading ? (
							<>
								<Loader className='animate-spin mr-2' />
								Processing...
							</>
						) : purchasedCourses[courseId] ? (
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
				</div>
			))}
		</div>
	);
}
export default CourseTest