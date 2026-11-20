import {
  ALL_SERVICES,
  BRAND_LOGO,
  COMPANY_INFO,
  SUBMENU_SERVICE_SLUGS,
} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

export function SiteFooter() {
  const {navigate} = useRouter();

  const footerServices = SUBMENU_SERVICE_SLUGS.map((slug) =>
    ALL_SERVICES.find((s) => s.slug === slug)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  const go = (path: string, hash?: string) => {
    navigate(path, hash ? {hash} : undefined);
  };

  return (
    <footer className="bg-[#0e3d2a] pt-14 text-[#d6dcd8]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.85fr_1.15fr]">
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                go('/');
              }}
              className="inline-flex rounded-md bg-[#ffffff] px-2 py-1 transition-opacity hover:opacity-90"
            >
              <img src={BRAND_LOGO.src} alt={BRAND_LOGO.alt} className="h-12 w-auto" />
            </a>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-[#b4c6bb]">
              Professional tree care and property maintenance with precision and expertise. Serving
              Central Arkansas residential, commercial, and municipal clients since 1996.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semiboldr text-[#8fceb0] uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(`/services/${service.slug}`);
                    }}
                    className="text-[#d6dcd8] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/services');
                  }}
                  className="font-semibold text-[#8fceb0] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                >
                  All Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semiboldr text-[#8fceb0] uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/');
                  }}
                  className="text-[#d6dcd8] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/about');
                  }}
                  className="text-[#d6dcd8] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/blog');
                  }}
                  className="text-[#d6dcd8] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/employment"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/employment');
                  }}
                  className="text-[#d6dcd8] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                >
                  Employment
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/contact');
                  }}
                  className="text-[#d6dcd8] transition-colors hover:text-[#ffffff] hover:underline hover:underline-offset-4"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semiboldr text-[#8fceb0] uppercase">
              Contact &amp; Hours
            </h3>
            <address className="mt-4 space-y-2 text-[0.95rem] not-italic">
              <p>{COMPANY_INFO.address}</p>
              <p>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-semibold text-[#ffffff] tabular-nums hover:underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#ffffff] hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="pt-1">
                <strong className="font-semibold text-[#ffffff]">Office Hours:</strong>{' '}
                {COMPANY_INFO.officeHours}
              </p>
              <p>
                <strong className="font-semibold text-[#ffffff]">Emergency Service:</strong>{' '}
                {COMPANY_INFO.emergencyHours}
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-[#9fad9f]">
          <span>&copy; 2026 {COMPANY_INFO.name}. All Rights Reserved.</span>
          <span>
            Little Rock, Arkansas ·{' '}
            <a href={COMPANY_INFO.phoneHref} className="tabular-nums hover:text-[#ffffff]">
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
