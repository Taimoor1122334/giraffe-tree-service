import {useEffect} from 'react';
import {SiteFooter} from './components/SiteFooter';
import {SiteHeader} from './components/SiteHeader';
import {getBlogPostBySlug, getServiceBySlug} from './data/treeServiceData';
import {AboutPage} from './pages/AboutPage';
import {BlogArticlePage} from './pages/BlogArticlePage';
import {BlogPage} from './pages/BlogPage';
import {ContactPage} from './pages/ContactPage';
import {EmploymentPage} from './pages/EmploymentPage';
import {HomePage} from './pages/HomePage';
import {ServiceDetailPage} from './pages/ServiceDetailPage';
import {ServicesPage} from './pages/ServicesPage';
import {RouterProvider, useRouter} from './router/RouterContext';

function AppShell() {
  const {currentPath, navigate} = useRouter();

  const serviceSlug = currentPath.startsWith('/services/')
    ? currentPath.replace('/services/', '')
    : null;
  const matchedService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  const blogSlug = currentPath.startsWith('/blog/')
    ? currentPath.replace('/blog/', '')
    : null;
  const matchedArticle = blogSlug ? getBlogPostBySlug(blogSlug) : undefined;

  useEffect(() => {
    const base = 'Giraffe Tree Service | Little Rock Tree Care';
    if (currentPath === '/') {
      document.title = 'Giraffe Tree Service | Little Rock Tree Care & Property Maintenance';
    } else if (currentPath === '/services') {
      document.title = `Services | ${base}`;
    } else if (matchedService) {
      document.title = `${matchedService.title} | ${base}`;
    } else if (currentPath === '/about') {
      document.title = `About Us | ${base}`;
    } else if (currentPath === '/blog') {
      document.title = `Blog & Field Notes | ${base}`;
    } else if (matchedArticle) {
      document.title = `${matchedArticle.title} | ${base}`;
    } else if (currentPath === '/employment') {
      document.title = `Employment | ${base}`;
    } else if (currentPath === '/contact') {
      document.title = `Contact & Free Estimate | ${base}`;
    } else {
      document.title = base;
    }
  }, [currentPath, matchedService, matchedArticle]);

  const renderPage = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    if (currentPath === '/services') {
      return <ServicesPage />;
    }
    if (matchedService) {
      return <ServiceDetailPage service={matchedService} />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/blog') {
      return <BlogPage />;
    }
    if (matchedArticle) {
      return <BlogArticlePage article={matchedArticle} />;
    }
    if (currentPath === '/employment') {
      return <EmploymentPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    return (
      <section className="py-20">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <p className="text-sm font-semibold text-[#14663f]">Page Not Found</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#145c3e] sm:text-4xl">
            We Couldn&rsquo;t Find That Page
          </h1>
          <p className="mt-4 text-[1.05rem] text-[#4a5a52]">
            Explore our tree care services, read about our Little Rock team since 1996, or request
            a free estimate.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="cursor-pointer rounded-md bg-[#145c3e] px-5 py-2.5 text-sm font-semibold text-[#ffffff] hover:bg-[#14663f]"
            >
              Return Home
            </button>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="cursor-pointer rounded-md border border-[#d5ddd8] bg-[#ffffff] px-5 py-2.5 text-sm font-semibold text-[#145c3e] hover:border-[#145c3e]"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#ffffff] text-[#1b2e24]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#145c3e] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#ffffff]"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppShell />
    </RouterProvider>
  );
}
