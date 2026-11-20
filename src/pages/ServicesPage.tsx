import {useState} from 'react';
import {ArrowRight, Phone} from 'lucide-react';
import {EstimateSection} from '../components/EstimateSection';
import {ResilientImage} from '../components/ResilientImage';
import {ALL_SERVICES, COMPANY_INFO} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

type ServiceFilter = 'all' | 'removal-storm' | 'pruning-health' | 'lot-stump';

const ADDITIONAL_CAPABILITIES = [
  {
    title: 'Lightning Protection',
    detail: 'Copper grounding conductors installed to protect prominent heritage yard trees.',
    relatedSlug: 'tree-risk-health-management',
  },
  {
    title: 'Deep Root Fertilization',
    detail: 'Targeted subsurface nutrient delivery for compacted Central Arkansas clay soils.',
    relatedSlug: 'tree-risk-health-management',
  },
  {
    title: 'Crown Reduction',
    detail: 'Selective lateral pruning that lowers canopy height and wind sail without topping.',
    relatedSlug: 'tree-trimming',
  },
  {
    title: 'Dangerous Overhangs',
    detail: 'Precision clearance over roofs, chimneys, garages, driveways, and service drops.',
    relatedSlug: 'tree-trimming',
  },
  {
    title: 'Crane-Assisted Rigging',
    detail: 'Controlled upward lifting for massive declining oaks in tight residential spaces.',
    relatedSlug: 'tree-removal',
  },
  {
    title: 'Brush Hogging & Mulching',
    detail: 'Overgrown acreage reclamation and hillside erosion control for builders and estates.',
    relatedSlug: 'lot-clearing',
  },
];

export function ServicesPage() {
  const {navigate, preselectedService, setPreselectedService} = useRouter();
  const [filter, setFilter] = useState<ServiceFilter>('all');

  const filteredServices =
    filter === 'all'
      ? ALL_SERVICES
      : ALL_SERVICES.filter((service) => service.categoryGroup === filter);

  const scrollToEstimate = (serviceOption?: string) => {
    if (serviceOption) {
      setPreselectedService(serviceOption);
    }
    const target = document.getElementById('estimate-request');
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div>
      {/* Editorial Page Header */}
      <section className="border-b border-[#d5ddd8] bg-[#eef3f0] py-12 lg:py-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-sm text-[#4a5a52]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="hover:text-[#145c3e] hover:underline"
            >
              Home
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-semibold text-[#145c3e]">Services</span>
          </nav>

          <div className="mt-5 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-[clamp(2rem,3.2vw,2.75rem)] font-bold leading-tight text-[#145c3e]">
                Full-Service Tree Care Across Central Arkansas
              </h1>
            </div>
            <p className="text-[1.03rem] leading-relaxed text-[#4a5a52]">
              Serving residential neighborhoods, homebuilders, commercial grounds, and
              municipalities since 1996. Every service starts with an honest on-site walk and a
              clear, written estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Services Directory */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d5ddd8] pb-6">
            <div
              className="flex flex-wrap gap-1.5 rounded-md border border-[#d5ddd8] bg-[#eef3f0] p-1"
              role="group"
              aria-label="Filter services by category"
            >
              {[
                {id: 'all', label: 'All Services'},
                {id: 'removal-storm', label: 'Removal & Storm'},
                {id: 'pruning-health', label: 'Pruning & Tree Health'},
                {id: 'lot-stump', label: 'Lot Clearing & Stumps'},
              ].map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilter(tab.id as ServiceFilter)}
                    className={`cursor-pointer rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-[#145c3e] text-[#ffffff]'
                        : 'text-[#4a5a52] hover:bg-[#ffffff] hover:text-[#145c3e]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-[#4a5a52] tabular-nums">
              Showing {filteredServices.length} specialized services
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {filteredServices.map((service) => {
              const href = `/services/${service.slug}`;
              return (
                <article
                  key={service.id}
                  className="flex flex-col overflow-hidden rounded-[6px] border border-[#d5ddd8] bg-[#ffffff]"
                >
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(href);
                    }}
                    className="group aspect-[16/10] w-full overflow-hidden bg-[#eef3f0]"
                  >
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <p className="text-xs font-semibold text-[#14663f]">
                        {service.categoryLabel} · {service.typicalClients}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#145c3e]">
                        <a
                          href={href}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(href);
                          }}
                          className="hover:underline hover:underline-offset-4"
                        >
                          {service.title}
                        </a>
                      </h2>
                      <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4a5a52]">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#d5ddd8] pt-4">
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(href);
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145c3e] hover:underline hover:underline-offset-4"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(service.estimateOption)}
                        className="cursor-pointer text-sm font-semibold text-[#14663f] hover:text-[#145c3e]"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Tree Care Treatments & Capabilities */}
      <section className="border-t border-[#d5ddd8] bg-[#ffffff] py-14 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
            <div>
              <h2 className="text-3xl font-bold text-[#145c3e]">
                Targeted Field Work &amp; Protection
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4a5a52]">
                Need help with a specific canopy, root, or clearance issue? Select any focus below
                to read how our crews handle it on-site.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {ADDITIONAL_CAPABILITIES.map((cap) => (
                <a
                  key={cap.title}
                  href={`/services/${cap.relatedSlug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/services/${cap.relatedSlug}`);
                  }}
                  className="block border-t border-[#d5ddd8] pt-4 transition-colors hover:border-[#145c3e]"
                >
                  <h3 className="text-lg font-semibold text-[#145c3e]">{cap.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4a5a52]">{cap.detail}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[6px] border border-[#d5ddd8] bg-[#145c3e] p-7 text-[#ffffff] sm:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Not Sure Which Service Your Tree Needs?
              </h2>
              <p className="mt-2 text-[0.98rem] text-[#d6dcd8]">
                We walk your property with you, explain what is safe to keep and what needs work,
                and give a clear estimate with no hidden fees.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToEstimate('Other')}
                className="cursor-pointer whitespace-nowrap rounded-md bg-[#1a7a4c] px-5 py-3 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#14663f]"
              >
                Book a Free Site Walk
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[#ffffff]/35 px-4 py-3 text-sm font-semibold text-[#ffffff] tabular-nums hover:border-[#ffffff]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Free Estimate Section */}
      <EstimateSection preselectedService={preselectedService} />
    </div>
  );
}
