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
      <section className="border-b border-[#dad3c5] bg-[#efece4] py-12 lg:py-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-sm text-[#4d5750]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="hover:text-[#1c3326] hover:underline"
            >
              Home
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-semibold text-[#1c3326]">Services</span>
          </nav>

          <div className="mt-5 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#935b25]">
                <span className="h-[2px] w-6 bg-[#b57435]" aria-hidden="true" />
                <span>All Tree Care &amp; Property Maintenance</span>
              </div>
              <h1 className="mt-3.5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-[#1c3326]">
                Full-Service Tree Care Across Central Arkansas
              </h1>
            </div>
            <p className="text-[1.03rem] leading-relaxed text-[#4d5750]">
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
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dad3c5] pb-6">
            <div
              className="flex flex-wrap gap-1.5 rounded-[4px] border border-[#dad3c5] bg-[#efece4] p-1"
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
                    className={`cursor-pointer rounded-[3px] px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-[#1c3326] text-[#f7f4ee]'
                        : 'text-[#4d5750] hover:bg-[#fcfbf8] hover:text-[#1c3326]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-[#4d5750] tabular-nums">
              Showing {filteredServices.length} specialized services
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {filteredServices.map((service) => {
              const href = `/services/${service.slug}`;
              return (
                <article
                  key={service.id}
                  className="flex flex-col overflow-hidden rounded-[6px] border border-[#dad3c5] bg-[#fcfbf8]"
                >
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(href);
                    }}
                    className="group aspect-[16/10] w-full overflow-hidden bg-[#efece4]"
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
                      <p className="text-xs font-semibold tracking-wide text-[#935b25]">
                        {service.categoryLabel} · {service.typicalClients}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#1c3326]">
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
                      <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4d5750]">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#dad3c5] pt-4">
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(href);
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c3326] hover:underline hover:underline-offset-4"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(service.estimateOption)}
                        className="cursor-pointer text-sm font-semibold text-[#935b25] hover:text-[#1c3326]"
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
      <section className="border-t border-[#dad3c5] bg-[#fcfbf8] py-14 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#935b25]">
                <span className="h-[2px] w-6 bg-[#b57435]" aria-hidden="true" />
                <span>Specialized Treatments</span>
              </div>
              <h2 className="mt-3.5 text-3xl font-semibold text-[#1c3326]">
                Targeted Field Work &amp; Protection
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4d5750]">
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
                  className="block border-t border-[#dad3c5] pt-4 transition-colors hover:border-[#1c3326]"
                >
                  <h3 className="text-lg font-semibold text-[#1c3326]">{cap.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4d5750]">{cap.detail}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[6px] border border-[#dad3c5] bg-[#1c3326] p-7 text-[#f7f4ee] sm:p-10">
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
                className="cursor-pointer whitespace-nowrap rounded-[3px] bg-[#b57435] px-5 py-3 text-sm font-semibold text-[#fcfbf8] transition-colors hover:bg-[#935b25]"
              >
                Book a Free Site Walk
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-[#f7f4ee]/35 px-4 py-3 text-sm font-semibold text-[#f7f4ee] tabular-nums hover:border-[#f7f4ee]"
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
