"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = document.documentElement;
		const storedTheme = localStorage.getItem("theme");

		if (
			storedTheme === "dark" ||
			(!storedTheme &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			root.classList.add("dark");
			setIsDark(true);
		} else {
			root.classList.remove("dark");
			setIsDark(false);
		}
	}, []);

	const toggleTheme = () => {
		const root = document.documentElement;
		const isDarkMode = root.classList.toggle("dark");
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
		setIsDark(isDarkMode);
	};

	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle Dark Mode"
			className="p-2 rounded-md border border-foreground hover:bg-foreground/10 transition"
		>
			{isDark ? "☀️" : "🌙"}
		</button>
	);
}
