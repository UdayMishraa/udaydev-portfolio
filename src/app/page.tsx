"use client";

import { urbanist } from "@/_lib/font";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
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

	const imageMotion = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<>
			<section className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
				{/* Text Section */}
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={containerVariants}
					className="w-full max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
				>
					<motion.h1
						variants={fadeUp}
						className={`text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight ${urbanist.className} text-text`}
					>
						Designing <span className="text-secondary">Intuitive</span> &{" "}
						<span className="text-secondary">Impactful</span> Interfaces
					</motion.h1>

					<motion.p
						variants={fadeUp}
						className="text-text text-base sm:text-lg md:text-xl leading-relaxed max-w-prose"
					>
						Hi, I&apos;m <strong className="text-text">Uday Mishra</strong> — a
						frontend engineer turning ideas into modern, responsive & accessible
						experiences. I specialize in <strong>React</strong>,{" "}
						<strong>Next.js</strong>, and <strong>Tailwind CSS</strong> —
						focused on UI systems that feel natural.
					</motion.p>

					<motion.div
						variants={fadeUp}
						className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
					>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.96 }}
							className="px-6 py-3 rounded-xl text-white font-semibold bg-secondary shadow-md hover:shadow-xl transition-all duration-300"
						>
							Explore My Work
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.96 }}
							className="px-6 py-3 rounded-xl text-text font-semibold border border-text hover:bg-text hover:text-white hover:shadow-md transition-all duration-300"
						>
							Let’s Connect
						</motion.button>
					</motion.div>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial="hidden"
					animate={controls}
					variants={imageMotion}
					className="w-full max-w-sm lg:max-w-md flex justify-center"
				>
					<div className="relative w-full aspect-[3/4] rounded-[2rem] bg-secondary/10 border border-secondary/30 backdrop-blur-xl shadow-[0_8px_40px_rgba(216,168,116,0.08)] overflow-hidden group transition-transform duration-300">
						<Image
							src="/uday-pic.jpg"
							alt="Portrait of Uday Mishra"
							fill
							className="object-cover object-top group-hover:saturate-200 group-hover:scale-105 transition-all duration-500"
						/>
						<div className="absolute inset-0 rounded-[2rem] ring-1 ring-secondary/10 group-hover:ring-accent/30 transition-all duration-500 pointer-events-none" />
					</div>
				</motion.div>
			</section>
		</>
	);
}
