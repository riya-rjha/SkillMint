import React from "react";
import { Star, StarHalf } from "lucide-react";

const CourseCard = ({
	imageUrl,
	title,
	instructor,
	rating,
	reviews,
	price,
}) => {
	// Function to render stars
	const renderStars = (rating) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Star key={i} className='w-4 h-4 fill-yellow-400 text-yellow-400' />
			);
		}

		if (hasHalfStar) {
			stars.push(
				<StarHalf
					key='half'
					className='w-4 h-4 fill-yellow-400 text-yellow-400'
				/>
			);
		}

		return stars;
	};

	return (
		<div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white'>
			<img src={imageUrl} alt={title} className='w-full h-48 object-cover' />
			<div className='p-4'>
				<h2 className='text-xl font-bold mb-2 text-gray-800'>{title}</h2>
				<p className='text-sm text-gray-600 mb-2'>{instructor}</p>

				<div className='flex items-center mb-2'>
					<span className='text-lg font-bold text-gray-800 mr-2'>{rating}</span>
					<div className='flex mr-2'>{renderStars(rating)}</div>
					<span className='text-sm text-gray-600'>
						({reviews.toLocaleString()})
					</span>
				</div>

				<div className='text-xl font-bold'>₹{price.toLocaleString()}</div>
			</div>
		</div>
	);
};

export default CourseCard