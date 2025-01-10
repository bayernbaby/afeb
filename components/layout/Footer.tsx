import Link from 'next/link';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { HubspotNewsletterAction } from '@/lib/hubspot/forms/action';
import { NAVIGATION, SOCIAL_LINKS } from '@/lib/constants';
export function Footer() {


  return (
    <footer className="relative z-0 bg-[#fff] border-t border-black/20 text-black">
      {/* SECTION 1 */}
      <div className="mb-2 md:mb-8 px-4 md:px-6 lg:px-10 py-16 flex flex-col md:flex-row justify-between items-start border-b border-white/20 gap-8 md:gap-0">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl md:text-4xl md:w-3/5 font-bold">
            LOGO
          </h2>
          <div className="mt-4 space-y-4 max-w-sm">
            <h3 className="font-medium uppercase">Newsletter</h3>
            <NewsletterForm formAction={HubspotNewsletterAction} />
          </div>
        </div>
        {/* Updated Links Section */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 w-full md:w-auto">
          <div className="flex flex-col gap-y-4">
            <h3 className="font-medium uppercase">Links</h3>
            <div className="flex flex-col gap-y-2 text-sm">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="font-medium uppercase">Social Media</h3>
            <div className="flex flex-col gap-y-2 text-sm">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
