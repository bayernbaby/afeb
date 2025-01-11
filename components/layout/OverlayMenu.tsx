'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useOverlayMenu } from '@/hooks/useOverlayMenu';
import { useEffect } from 'react';
import { SocialMenuItem } from '../menu/SocialMenuItem';
import { MenuItem } from '../menu/MenuItem';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { HubspotNewsletterAction } from '@/lib/hubspot/forms/action';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NAVIGATION, SOCIAL_LINKS } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

export function OverlayMenu() {
  const { isOpen, close } = useOverlayMenu();
  const { t } = useTranslation();

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
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm">{t('nav.menu')}</h2>
                <LanguageSwitcher />
              </div>
              <nav className="space-y-4">
                {NAVIGATION.map((item) => (
                  <MenuItem
                    key={item.label}
                    title={t(`nav.${item.label}`)}
                    href={item.href}
                    onClose={close}
                  />
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm mb-4">{t('footer.newsletter')}</h2>
              <NewsletterForm formAction={HubspotNewsletterAction} />
            </div>

            <div>
              <h2 className="text-sm mb-4">{t('footer.social')}</h2>
              <nav className="">
                {SOCIAL_LINKS.map((item) => (
                  <SocialMenuItem
                    key={item.label}
                    title={t(`social.${item.label}`)}
                    href={item.href}
                    handle={item.handle}
                    onClose={close}
                  />
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
