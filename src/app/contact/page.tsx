"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
			className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col lg:flex-row items-center justify-between gap-20"
		>
			<motion.h1 variants={fadeUp} className="text-4xl font-bold">
				Contact
			</motion.h1>
		</motion.section>
	);
}
