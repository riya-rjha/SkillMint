import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedCourses from './shared/FeaturedCourses';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  
  const changePage = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 1000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      case 'courses':
        return <CoursesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" />
        ) : (
          renderPage()
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

<Navigation/>

const Footer = () => {
  return (
		<footer className='flex justify-center items-center bg-[#111827] bg-opacity-30 py-3 mt-auto '>
			<div className='mx-auto px-6'>
				<p>&copy; 2024 SkillMint. All rights reserved.</p>
			</div>
		</footer>
	);
};

const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-20 h-20 border-4 border-[#3FA37A] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Hero Section */}
			<header className='pt-32 pb-60 px-6'>
				<div className='container mx-auto text-center'>
					<motion.h1
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3 }}
						className='text-6xl font-bold mb-4'
					>
            <div className='flex items-center justify-center mb-10'>
						<img src='https://imgur.com/TWcixR0.png' className='w-[200px]' alt='' />

            </div>
						Learn, Earn, and Grow on the{" "}
						<motion.span
							className='text-[#3FA37A] inline-block'
							animate={{ rotate: [0, 3, 0, -3, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							Blockchain
						</motion.span>
					</motion.h1>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4 }}
						className='text-3xl mb-20 max-w-3xl mx-auto mt-14'
					>
						SkillMint connects learners directly with expert instructors through
						secure, decentralized courses. Unlock your potential while
						supporting creators.
					</motion.p>
					<motion.button
            onClick={() => navigate('/courses')}
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.1 }}
						whileHover={{
							scale: 1.05,
							boxShadow: "0 0 15px rgb(63, 163, 122)",
						}}
						whileTap={{ scale: 0.95 }}
						className='bg-[#3FA37A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all'
					>
						Start Learning Now
					</motion.button>
				</div>
			</header>

			{/* How SkillMint Works Section */}
			<section className='py-16 px-6 bg-[#3FA37A] bg-opacity-10'>
				<div className='container mt-10 mx-auto'>
					<motion.h2
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3 }}
						className='text-6xl font-bold mb-20 text-center'
					>
						How Skill<span className='text-[#3FA37A]'>Mint</span> Works
					</motion.h2>
					<div className='grid grid-cols-1 mt-40 md:grid-cols-3 gap-8'>
						{[
							{
								title: "Connect",
								icon: "🔗",
								description: "Link your wallet to join the SkillMint ecosystem",
							},
							{
								title: "Learn",
								icon: "📚",
								description:
									"Access high-quality courses from expert instructors",
							},
							{
								title: "CertiNFT",
								icon: " 🎓",
								description:
									"Earn CertiNFTs as proof of your blockchain achievements.",
							},
						].map((step, index) => (
							<motion.div
								key={index}
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 + index * 0.1 }}
								whileHover={{
									scale: 1.05,
									boxShadow: "0 0 20px rgba(63, 163, 122, 0.3)",
								}}
								className='bg-white bg-opacity-5 p-20 rounded-lg text-center'
							>
								<motion.div
									className='text-4xl mb-4'
									animate={{ rotate: [0, 10, 0, -10, 0] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										delay: index * 0.2,
									}}
								>
									{step.icon}
								</motion.div>
								<h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
								<p>{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<FeaturedCourses />

			{/* Call to Action Section */}
			{/* <section className="py-16 px-6 bg-[#3FA37A] bg-opacity-30">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            Join SkillMint today and unlock your potential on the blockchain.
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#3FA37A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Started Now
          </motion.button>
        </div>
      </section> */}
		</motion.div>
	);
};

export default App;
