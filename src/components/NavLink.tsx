"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface LinkProps {
	href: string;
	name: string;
}

export default function NavLink({ link }: { link: LinkProps }) {
	const pathname = usePathname();
	return (
		<Link
			className={`mx-2 text-lg transition-all duration-200 active:delay-200 ${
				pathname === link.href
					? "font-semibold text-secondary"
					: "text-text/90 hover:text-secondary"
			}`}
			href={link.href}
		>
			{link.name}
		</Link>
	);
}
