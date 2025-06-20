"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { techStack } from "@/constants/techStack";

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, scale: 0.9, y: 20 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: "spring" as const, stiffness: 120 },
	},
};

export default function SkillSection() {
	return (
		<section className="py-16 px-6 md:px-2">
			<h2 className="text-4xl font-bold text-center lg:text-left mb-14 text-[#2E2E2E]">
				My Tech Stack
			</h2>

			<motion.div
				variants={container}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center"
			>
				{techStack.map((tech, index) => (
					<motion.div
						key={index}
						variants={item}
						whileHover={{ scale: 1.08 }}
						className="group relative cursor-pointer p-6 rounded-2xl border border-[#8E8D8A]/30 bg-accent/30 backdrop-blur-md hover:bg-accent/50  shadow-lg hover:shadow-lg transition-all duration-300 flex justify-center items-center"
					>
						<Image
							src={tech.logo}
							alt={tech.name}
							width={48}
							height={48}
							className="mx-auto mb-1 transition-transform duration-300 ease-in-out"
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
