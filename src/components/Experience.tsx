"use client";

import { motion } from "framer-motion";

const experienceData = [
	{
		role: "Frontend Developer",
		company: "TechNova Solutions",
		duration: "2023 – Present",
		description:
			"Developed high-performance web apps using React and Next.js. Collaborated with design and backend teams to deliver pixel-perfect interfaces.",
	},
	{
		role: "UI Developer",
		company: "PixelCraft Inc.",
		duration: "2021 – 2023",
		description:
			"Built scalable UI components with Tailwind CSS and improved accessibility across projects. Focused on reusable architecture and animations.",
	},
	{
		role: "Junior Web Developer",
		company: "CreativeLabs",
		duration: "2019 – 2021",
		description:
			"Maintained company websites, introduced component-based design, and optimized site speed and SEO using best practices.",
	},
];

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
};

const fadeItem = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

export default function Experience() {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={container}
			className="w-full flex flex-col gap-12"
		>
			<h2 className="text-3xl sm:text-4xl font-bold text-text">Experience</h2>

			<div className="flex flex-col gap-8 border-l-2 border-muted pl-6">
				{experienceData.map((exp, idx) => (
					<motion.div key={idx} variants={fadeItem} className="relative group">
						{/* Timeline Dot */}
						<div className="absolute -left-[1.15rem] top-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />

						{/* Experience Content */}
						<div className="flex flex-col gap-1">
							<h3 className="text-xl font-semibold text-text">{exp.role}</h3>
							<span className="text-sm text-secondary">
								{exp.company} — {exp.duration}
							</span>
							<p className="text-gray-700 text-base leading-relaxed">
								{exp.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
