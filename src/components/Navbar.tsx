"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { parisienne } from "@/_lib/font";
import Link from "next/link";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavLink from "./NavLink";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Contact", href: "/contact" },
];

const listContainerVariants = {
	opened: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};

const listItemsVariants = {
	closed: {
		opacity: 0,
		y: -20,
		transition: {
			type: "spring" as const,
			stiffness: 100,
			damping: 20,
		},
	},
	opened: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 100,
			damping: 20,
		},
	},
};

export default function Navbar() {
	const sidebarRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [isOpen]);

	return (
		<nav
			className={`
			h-24 fixed top-0 left-0 w-full flex items-center justify-between
			px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48
			text-text z-50 transition-all duration-300 ease-in-out
			${isScrolled ? "bg-background/90 shadow-xl backdrop-blur-xl" : "bg-transparent"}
		`}
		>
			{/* Navigation Links */}
			<div className="hidden md:flex justify-center gap-4 w-1/3">
				{links.map((link) => (
					<NavLink link={link} key={link.name} />
				))}
			</div>

			{/* Logo */}
			<div className="md:hidden lg:flex w-1/3 justify-center">
				<Link
					href="/"
					aria-label="Go to homepage"
					className={`${parisienne.className} text-2xl transition-all duration-150 ease-in-out text-shadow-sm hover:text-secondary`}
				>
					<span className="font-medium">Uday</span>
					<span className="px-2 py-0.5 rounded-md font-medium">Mishra</span>
				</Link>
			</div>

			{/* Social Icons */}
			<div className="hidden md:flex justify-center gap-4 text-2xl w-1/3 text-accent">
				<Link href="#">
					<FaGithub className="hover:text-secondary transition" />
				</Link>
				<Link href="#">
					<FaInstagram className="hover:text-secondary transition" />
				</Link>
				<Link href="#">
					<FaFacebook className="hover:text-secondary transition" />
				</Link>
				<Link href="#">
					<FaLinkedin className="hover:text-secondary transition" />
				</Link>
			</div>

			{/* Mobile Hamburger Menu */}
			<div className="md:hidden flex flex-col items-center justify-end">
				<AnimatePresence mode="wait">
					{!isOpen ? (
						<motion.div
							key="hamburger"
							initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
							animate={{ opacity: 1, rotate: 0, scale: 1 }}
							exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
							transition={{ duration: 0.3 }}
						>
							<RxHamburgerMenu
								className="text-2xl text-text cursor-pointer z-50 relative hover:text-secondary transition-all duration-200 ease-in-out"
								onClick={() => setIsOpen((prev) => !prev)}
							/>
						</motion.div>
					) : (
						<motion.div
							key="cross"
							initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
							animate={{ opacity: 1, rotate: 0, scale: 1 }}
							exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
							transition={{ duration: 0.3 }}
						>
							<RxCross2
								className="text-2xl hover:text-secondary cursor-pointer z-50 relative text-text transition-all duration-200 ease-in-out"
								onClick={() => setIsOpen(false)}
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Mobile Nav Links */}
				{isOpen && (
					<motion.div
						ref={sidebarRef}
						variants={listContainerVariants}
						animate="opened"
						initial="closed"
						exit="closed"
						className="absolute top-0 right-0 h-screen w-[65vw] bg-gradient-to-br from-secondary/60 to-primary/50 z-40 rounded-l-3xl shadow-xl flex flex-col items-center justify-center gap-10 px-6 py-10 text-text transition-all duration-300 ease-in-out"
						style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
					>
						{links.map((link) => (
							<motion.div key={link.name} variants={listItemsVariants}>
								<Link
									href={link.href}
									className="text-xl font-semibold text-text hover:text-accent transition-all duration-200 underline-offset-4 hover:underline"
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</nav>
	);
}
