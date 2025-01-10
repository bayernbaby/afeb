'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useOverlayMenu } from '@/hooks/useOverlayMenu';

export function Navbar() {
  const { isOpen, toggle } = useOverlayMenu();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background
      setHasScrolled(currentScrollY > 0);

      // Only hide navbar on desktop
      if (window.innerWidth >= 768) { // 768px is the 'md' breakpoint in Tailwind
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on mobile
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${hasScrolled ? 'backdrop-blur-sm' : 'bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex h-16 items-center px-4 md:px-6 lg:px-10 mx-auto justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-medium">LOGO ©</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 uppercase text-xs font-medium">
          <Link href="/" className="hover:text-primary">
            Link
          </Link>
          <Link href="/" className="hover:text-primary">
            Link
          </Link>
          <Link href="/" className="hover:text-primary">
            Link
          </Link>
          <Link href="/" className="hover:text-primary">
            Link
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden px-4 py-2 border border-black/20 rounded-full bg-white" onClick={toggle}>
          MENU
        </button>
      </div>
    </div>
  );
}
