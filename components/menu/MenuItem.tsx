import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface MenuItemProps {
    title: string;
    href: string;
    onClose: () => void;
}

export const menuItemVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
};

export function MenuItem({ title, href, onClose }: MenuItemProps) {
    return (
        <motion.div variants={menuItemVariants} initial="initial" animate="animate" exit="exit">
            <Link
                href={href}
                onClick={onClose}
                className="flex justify-between items-center py-4 border-b border-current"
            >
                <span className="text-2xl font-medium">{title}</span>
                <ArrowUpRight className="w-5 h-5" />
            </Link>
        </motion.div>
    );
} 