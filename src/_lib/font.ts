import { Cormorant_Garamond, Urbanist, Parisienne } from "next/font/google";

export const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const urbanist = Urbanist({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const parisienne = Parisienne({
	subsets: ["latin"],
	weight: "400",
});
