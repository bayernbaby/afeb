import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuItemVariants } from './MenuItem';

interface SocialMenuItemProps {
    title: string;
    href: string;
    handle?: string;
    onClose: () => void;
}

export function SocialMenuItem({ title, href, handle, onClose }: SocialMenuItemProps) {
    return (
        <motion.div variants={menuItemVariants} initial="initial" animate="animate" exit="exit">
            <Link
                href={href}
                onClick={onClose}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
            >
                <span className="text-sm font-medium">{title}</span>
                <span className="text-sm text-muted-foreground">{handle}</span>
            </Link>
        </motion.div>
    );
} 