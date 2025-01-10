import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const headingVariants = cva(
    "font-bold tracking-tight",
    {
        variants: {
            size: {
                default: "text-3xl md:text-4xl",
                sm: "text-2xl md:text-3xl",
                md: "text-3xl md:text-4xl lg:text-5xl",
                lg: "text-4xl md:text-5xl lg:text-6xl",
                xl: "text-5xl md:text-6xl lg:text-7xl",
                "2xl": "text-5xl md:text-7xl lg:text-8xl",
                "3xl": "text-7xl md:text-[70px] lg:text-[90px]",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

const paragraphVariants = cva(
    "",
    {
        variants: {
            size: {
                default: "text-base sm:text-lg",
                sm: "text-sm sm:text-base",
                xs: "text-xs sm:text-sm",
            },
            color: {
                default: "text-slate-700",
                light: "text-white",
            } as const
        },
        defaultVariants: {
            size: "default",
            color: "default",
        },
    }
)

interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    size?: 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
    color?: 'default' | 'light';
}

export function H1({ children, className, size, ...props }: HeadingProps) {
    return (
        <h1 {...props} className={cn(headingVariants({ size, className }))}>
            {children}
        </h1>
    )
}

export function H2({ children, className, size, ...props }: HeadingProps) {
    return (
        <h2 {...props} className={cn(headingVariants({ size, className }))}>
            {children}
        </h2>
    )
}

export function P({ children, className, size, color, ...props }: ParagraphProps) {
    return (
        <p {...props} className={cn(paragraphVariants({ size, color, className }))}>
            {children}
        </p>
    )
}

export function H3({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-3xl font-bold tracking-tight", className)} {...props}>
            {children}
        </h3>
    );
}

export function H4({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4 className={cn("text-lg tracking-tight", className)} {...props}>
            {children}
        </h4>
    );
} 