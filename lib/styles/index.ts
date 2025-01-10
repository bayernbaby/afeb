import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const styles = {
    section: {
        padding: "px-4 md:px-6 lg:px-10",
        spacing: "py-16 md:py-24 lg:py-32",
        smallSpacing: "py-12 md:py-16 lg:py-20",
    },
    container: {
        default: "w-full max-w-screen-xl mx-auto",
        small: "w-full max-w-screen-lg mx-auto",
    },
    spacing: {
        stack: "space-y-4 md:space-y-6 lg:space-y-8",
        largeStack: "space-y-8 md:space-y-12 lg:space-y-16",
        grid: "gap-4 md:gap-6 lg:gap-8",
        largeGrid: "gap-8 md:gap-12 lg:gap-16",
    },
    sectionContainer: {
        default: "px-4 md:px-6 lg:px-10 py-16 md:py-24 lg:py-32 w-full max-w-screen-xl mx-auto",
        small: "px-4 md:px-6 lg:px-10 py-12 md:py-16 lg:py-20 w-full max-w-screen-lg mx-auto",
    }
} as const;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
} 