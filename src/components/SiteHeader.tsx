import {useEffect, useRef, useState} from 'react';
import {ChevronDown, Menu, Phone, X} from 'lucide-react';
import {
  ALL_SERVICES,
  BRAND_LOGO,
  COMPANY_INFO,
  SUBMENU_SERVICE_SLUGS,
} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

export function SiteHeader() {
  const {currentPath, navigate} = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const submenuServices = SUBMENU_SERVICE_SLUGS.map((slug) =>
    ALL_SERVICES.find((service) => service.slug === slug)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  const go = (path: string, hash?: string) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    navigate(path, hash ? {hash} : undefined);
  };

  const isServicesActive =
    currentPath === '/services' || currentPath.startsWith('/services/');
  const isBlogActive = currentPath === '/blog' || currentPath.startsWith('/blog/');

  const navLinkClass = (active: boolean) =>
    `whitespace-nowrap py-1 text-[0.95rem] font-semibold transition-colors ${
      active
        ? 'text-[#145c3e] underline decoration-[#1a7a4c] decoration-2 underline-offset-[6px]'
        : 'text-[#1b2e24] hover:text-[#145c3e] hover:underline hover:underline-offset-4'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#d5ddd8] bg-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:gap-8 lg:px-12">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            go('/');
          }}
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-85"
        >
          <img
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            className="h-9 w-auto sm:h-12"
          />
        </a>

        {/* Zone 2: Single-line Primary Navigation */}
        <nav className="hidden items-center lg:flex" aria-label="Primary Navigation">
          <ul className="flex items-center gap-6">
            <li className="shrink-0">
              <a
                href="/"
                aria-current={currentPath === '/' ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go('/');
                }}
                className={navLinkClass(currentPath === '/')}
              >
                Home
              </a>
            </li>

            <li
              className="relative shrink-0"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="inline-flex items-center gap-0.5">
                <a
                  href="/services"
                  aria-current={currentPath === '/services' ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go('/services');
                  }}
                  className={navLinkClass(isServicesActive)}
                >
                  Services
                </a>
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-controls="services-menu"
                  aria-label="Toggle services submenu"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="inline-flex cursor-pointer items-center rounded-md p-1 text-[#1b2e24] transition-colors hover:bg-[#eef3f0] hover:text-[#145c3e]"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-150 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {dropdownOpen && (
                <ul
                  id="services-menu"
                  className="absolute top-full left-0 w-72 rounded-md border border-[#d5ddd8] bg-[#ffffff] py-2 shadow-lg"
                >
                  {submenuServices.map((service) => {
                    const serviceHref = `/services/${service.slug}`;
                    const isActive = currentPath === serviceHref;
                    return (
                      <li key={service.id}>
                        <a
                          href={serviceHref}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={(e) => {
                            e.preventDefault();
                            go(serviceHref);
                          }}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${
                            isActive
                              ? 'bg-[#eef3f0] font-semibold text-[#145c3e]'
                              : 'text-[#1b2e24] hover:bg-[#eef3f0] hover:text-[#145c3e]'
                          }`}
                        >
                          {service.title}
                        </a>
                      </li>
                    );
                  })}
                  <li className="my-1.5 border-t border-[#d5ddd8]" role="separator" />
                  <li>
                    <a
                      href="/services"
                      aria-current={currentPath === '/services' ? 'page' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        go('/services');
                      }}
                      className="block px-4 py-2 text-sm font-semibold text-[#145c3e] transition-colors hover:bg-[#eef3f0]"
                    >
                      All Services
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="shrink-0">
              <a
                href="/about"
                aria-current={currentPath === '/about' ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go('/about');
                }}
                className={navLinkClass(currentPath === '/about')}
              >
                About
              </a>
            </li>

            <li className="shrink-0">
              <a
                href="/blog"
                aria-current={isBlogActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go('/blog');
                }}
                className={navLinkClass(isBlogActive)}
              >
                Blog
              </a>
            </li>

            <li className="shrink-0">
              <a
                href="/employment"
                aria-current={currentPath === '/employment' ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go('/employment');
                }}
                className={navLinkClass(currentPath === '/employment')}
              >
                Employment
              </a>
            </li>

            <li className="shrink-0">
              <a
                href="/contact"
                aria-current={currentPath === '/contact' ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go('/contact');
                }}
                className={navLinkClass(currentPath === '/contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => go('/contact', 'estimate-request')}
            className="hidden cursor-pointer whitespace-nowrap rounded-md bg-[#145c3e] px-5 py-2.5 text-sm font-semibold text-[#ffffff] transition-colors duration-150 hover:bg-[#14663f] lg:inline-flex"
          >
            Free Estimate
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-[#d5ddd8] text-[#1b2e24] transition-colors hover:bg-[#eef3f0] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="max-h-[82vh] overflow-y-auto border-t border-[#d5ddd8] bg-[#ffffff] px-5 py-5 lg:hidden"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="divide-y divide-[#e3ebe6]">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/');
                  }}
                  className="block py-3 font-semibold text-[#1b2e24]"
                >
                  Home
                </a>
              </li>
              <li className="py-3">
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/services');
                  }}
                  className="block font-semibold text-[#1b2e24]"
                >
                  All Services
                </a>
                <ul className="mt-2 space-y-1.5 pl-4">
                  {submenuServices.map((service) => (
                    <li key={service.id}>
                      <a
                        href={`/services/${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          go(`/services/${service.slug}`);
                        }}
                        className="block py-1.5 text-sm font-medium text-[#4a5a52] hover:text-[#145c3e]"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/about');
                  }}
                  className="block py-3 font-semibold text-[#1b2e24]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    go('/blog');
                  }}
                  className="block py-3 font-semibold text-[#1b2e24]"
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
                  className="block py-3 font-semibold text-[#1b2e24]"
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
                  className="block py-3 font-semibold text-[#1b2e24]"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-5 grid gap-2.5">
              <button
                type="button"
                onClick={() => go('/contact', 'estimate-request')}
                className="w-full cursor-pointer rounded-md bg-[#145c3e] px-5 py-3 text-center text-sm font-semibold text-[#ffffff]"
              >
                Request a Free Estimate
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#d5ddd8] px-5 py-3 text-sm font-semibold text-[#145c3e] tabular-nums"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
