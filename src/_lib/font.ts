import { Urbanist, Jost, Great_Vibes } from "next/font/google";

export const urbanist = Urbanist({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const greatVibes = Great_Vibes({
	subsets: ["latin"],
	weight: "400",
});
