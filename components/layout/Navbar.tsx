'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@/components/ui/link';
import { useOverlayMenu } from '@/hooks/useOverlayMenu';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from '@/lib/i18n';
import { NAVIGATION } from '@/lib/constants';

export function Navbar() {
  const { isOpen, toggle } = useOverlayMenu();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 0);

      if (window.innerWidth >= 768) {
        setIsVisible(currentScrollY <= lastScrollY.current);
      } else {
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
          <span className="text-xl font-medium">AFEB ©</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 uppercase text-xs font-medium">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary"
              >
                {t(`nav.${item.label}`)}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="px-4 py-2 border border-black/20 rounded-full bg-white"
            onClick={toggle}
          >
            MENU
          </button>
        </div>
      </div>
    </div>
  );
}
