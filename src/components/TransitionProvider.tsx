"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { jost } from "@/_lib/font";

export default function TransitionProvider({
	children,
}: {
	children: ReactNode;
}) {
	const pathName = usePathname();

	return (
		<>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={pathName || "route"}
					className="fixed inset-0 z-[100] w-screen h-screen pointer-events-none"
					initial={{
						opacity: 1,
						scaleY: 1,
						borderBottomLeftRadius: "100px",
						borderBottomRightRadius: "100px",
					}}
					animate={{
						opacity: 0,
						scaleY: 0.7,
					}}
					exit={{
						opacity: 1,
						scaleY: 1.1,
					}}
					transition={{
						duration: 1,
						ease: [0.6, 0.05, 0.01, 0.9],
					}}
					style={{
						transformOrigin: "top center",
					}}
				>
					{/* Inner glass effect */}
					<div className="absolute inset-0 rounded-b-[100px] backdrop-blur-md bg-gradient-to-br from-primary/80 via-secondary/70 to-tertiary/70" />
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-3xl sm:text-5xl font-bold text-white drop-shadow-xl capitalize z-[101] text-center absolute inset-0 flex items-center justify-center pointer-events-none"
					>
						{pathName?.replace("/", "") || "Home"}
					</motion.h2>
				</motion.div>
				{/* Pathname text */}
			</AnimatePresence>

			<header className={`h-24 flex items-center ${jost.className}`}>
				<Navbar />
			</header>

			<main className="flex-1">{children}</main>
		</>
	);
}
