'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useOverlayMenu } from '@/hooks/useOverlayMenu';
import { useEffect } from 'react';
import { SocialMenuItem } from '../menu/SocialMenuItem';
import { MenuItem } from '../menu/MenuItem';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { HubspotNewsletterAction } from '@/lib/hubspot/forms/action';

const menuItems = [
  { title: 'LINK', href: '/' },
  { title: 'LINK', href: '/' },
  { title: 'LINK', href: '/' },
  { title: 'LINK', href: '/' },
];
const socialItems = [
  {
    title: 'Instagram',
    href: 'https://instagram.com/yourusername',
    handle: '@yourusername',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/yourusername',
    handle: '@yourusername',
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    handle: '@yourusername',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/yourusername',
    handle: '@yourusername',
  },
  {
    title: 'Email',
    href: 'mailto:hello@example.com',
    handle: 'hello@example.com',
  },
];

export function OverlayMenu() {
  const { isOpen, close } = useOverlayMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed h-[100dvh] inset-0 bg-background z-50 overflow-y-auto pt-safe"
        >
          <div className="pt-16 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] h-full flex flex-col justify-between">

            <div>
              <h2 className="text-sm">[MENU]</h2>
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <MenuItem key={item.title} {...item} onClose={close} />
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm mb-4">[NEWSLETTER]</h2>
              <NewsletterForm formAction={HubspotNewsletterAction} />
            </div>

            <div>
              <h2 className="text-sm mb-4">[SOCIALS]</h2>
              <nav className="">
                {socialItems.map((item) => (
                  <SocialMenuItem key={item.title} {...item} onClose={close} />
                ))}
              </nav>
            </div>
          </div>



        </motion.div>
      )}
    </AnimatePresence>
  );
}
