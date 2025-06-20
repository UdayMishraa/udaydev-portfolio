"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillSection from "@/components/SkillsSection";

import Experience from "@/components/Experience";

export default function About() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

	useEffect(() => {
		if (inView) controls.start("visible");
	}, [inView, controls]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.2,
			},
		},
	};

	const fadeUp = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={containerVariants}
			className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-16 md:py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 md:gap-24 lg:gap-32"
		>
			{/* Left Column */}
			<div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-16 md:gap-24">
				{/* Biography */}
				<motion.div variants={fadeUp} className="flex flex-col gap-8 md:gap-10">
					<h1 className="text-3xl sm:text-4xl font-bold text-text">
						Biography
					</h1>
					<p className="text-base sm:text-lg text-text leading-relaxed">
						I&apos;m a Frontend Developer with 4 years of experience building
						fast, responsive, and accessible web interfaces. My core stack
						includes React, Next.js, and Tailwind CSS, and I thrive on creating
						intuitive, user-centered experiences with clean and scalable code.
						<br />
						<br />I enjoy the process of translating design concepts into
						smooth, interactive UI. Collaborating with designers and backend
						engineers, I focus on performance, accessibility, and detail—making
						sure each product not only works but feels great to use.
					</p>
					<span className="font-bold italic text-secondary">
						“Good design is obvious. Great design is transparent.”
					</span>
				</motion.div>

				{/* Skills Section */}
				<motion.div variants={fadeUp} className="w-full">
					<SkillSection />
				</motion.div>

				{/* Experience */}
				<motion.div
					variants={fadeUp}
					className="text-2xl sm:text-3xl font-bold text-text pt-4"
				>
					<Experience />
				</motion.div>
			</div>
		</motion.section>
	);
}
