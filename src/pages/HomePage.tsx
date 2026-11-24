import {useState} from 'react';
import {ArrowRight, Phone} from 'lucide-react';
import {EstimateSection} from '../components/EstimateSection';
import {ResilientImage} from '../components/ResilientImage';
import {
  ALL_SERVICES,
  COMPANY_INFO,
  CTA_IMAGE,
  GIRAFFE_PILLARS,
  HERITAGE_IMAGE,
  HERO_IMAGE,
  PRIMARY_SERVICE_SLUGS,
  SERVICE_AREAS,
  SPECIALIZED_SERVICE_SLUGS,
  TESTIMONIALS,
} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

const TRACK_RECORD = [
  {value: '1996', label: 'Founded in Little Rock'},
  {value: '30+', label: 'Years of Local Service'},
  {value: '91+', label: '5-Star Client Reviews'},
  {value: '24/7', label: 'Storm Emergency Response'},
];

export function HomePage() {
  const {navigate, preselectedService, setPreselectedService} = useRouter();
  const [selectedAreaId, setSelectedAreaId] = useState<string>(SERVICE_AREAS[0].id);

  const selectedArea =
    SERVICE_AREAS.find((area) => area.id === selectedAreaId) ?? SERVICE_AREAS[0];

  const primaryServices = PRIMARY_SERVICE_SLUGS.map((slug) =>
    ALL_SERVICES.find((s) => s.slug === slug)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  const specializedServices = SPECIALIZED_SERVICE_SLUGS.map((slug) =>
    ALL_SERVICES.find((s) => s.slug === slug)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  const featuredQuote = TESTIMONIALS.find((item) => item.featured) ?? TESTIMONIALS[0];
  const secondaryQuotes = TESTIMONIALS.filter((item) => item.id !== featuredQuote.id);

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
    <>
      {/* 1. Full-bleed photographic hero */}
      <section className="relative overflow-hidden bg-[#0e3d2a] text-[#ffffff]">
        <div className="absolute inset-0" aria-hidden="true">
          <ResilientImage
            src={HERO_IMAGE.src}
            alt=""
            fallbackTitle="Giraffe Tree Service · Little Rock, AR"
            loading="eager"
            className="h-full w-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-[#0e3d2a]/40 lg:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e3d2a]/90 via-[#0e3d2a]/55 to-[#0e3d2a]/25 lg:bg-[linear-gradient(90deg,#0e3d2a_0%,rgba(14,61,42,0.82)_28%,rgba(14,61,42,0.18)_52%,transparent_68%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-[1600px] flex-col justify-end px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[760px] lg:justify-center lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-[clamp(2.15rem,3.2vw,3.15rem)] font-bold leading-[1.15] text-[#ffffff]">
              Expert Tree Care for a Safer, More Beautiful Property.
            </h1>

            <p className="mt-5 max-w-xl text-[1.125rem] leading-relaxed text-[#e7f3ec]">
              Giraffe Tree Service provides dependable, safety-first tree care for residential,
              commercial, and municipal properties across Little Rock and Central Arkansas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToEstimate()}
                className="cursor-pointer whitespace-nowrap rounded-md bg-[#1a7a4c] px-6 py-3.5 text-[0.98rem] font-semibold text-[#ffffff] transition-colors duration-150 hover:bg-[#14663f]"
              >
                Get a Free Estimate
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[#ffffff]/40 px-5 py-3.5 text-[0.98rem] font-semibold text-[#ffffff] tabular-nums transition-colors duration-150 hover:border-[#ffffff] hover:bg-[#ffffff]/10"
              >
                <Phone className="h-4 w-4 text-[#cfe8da]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <dl
            className="mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 border-t border-[#ffffff]/20 pt-7 md:grid-cols-4 lg:mt-16"
            aria-label="Company Track Record"
          >
            {TRACK_RECORD.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-[#e7f3ec]">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-[#ffffff] tabular-nums sm:text-[1.85rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. Intro + Free Estimate Request Split Band */}
      <EstimateSection preselectedService={preselectedService} />

      {/* 3. Comprehensive Services Showcase & Specialized Directory */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#d5ddd8] pb-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-[#145c3e] sm:text-4xl">
                Comprehensive Tree Care for Your Property
              </h2>
            </div>
            <p className="max-w-md text-[1rem] leading-relaxed text-[#4a5a52]">
              From selective shade-tree pruning and health assessments to crane-assisted removals
              and land clearing, every job draws on nearly three decades of Central Arkansas field
              experience.
            </p>
          </div>

          {/* Staggered Editorial 2-Up Grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {primaryServices.map((service) => {
              const serviceHref = `/services/${service.slug}`;
              return (
                <article key={service.id} className="flex flex-col">
                  <a
                    href={serviceHref}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(serviceHref);
                    }}
                    className="block aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#eef3f0]"
                  >
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="h-full w-full object-cover"
                    />
                  </a>

                  <div className="pt-5">
                    <p className="text-xs font-semibold text-[#14663f]">
                      {service.categoryLabel}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-semibold text-[#145c3e]">
                      <a
                        href={serviceHref}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(serviceHref);
                        }}
                        className="hover:underline hover:underline-offset-4"
                      >
                        {service.title}
                      </a>
                    </h3>
                    <p className="mt-2.5 text-[1rem] leading-relaxed text-[#4a5a52]">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-5">
                      <a
                        href={serviceHref}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(serviceHref);
                        }}
                        className="inline-flex items-center gap-1.5 border-b border-[#145c3e]/30 pb-0.5 text-sm font-semibold text-[#145c3e] transition-colors hover:border-[#145c3e]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(service.estimateOption)}
                        className="cursor-pointer text-sm font-semibold text-[#14663f] transition-colors hover:text-[#145c3e]"
                      >
                        Request Estimate
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Ruled Specialized Services Directory */}
          <div className="mt-16 grid grid-cols-1 items-start gap-8 border-t border-[#d5ddd8] pt-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
            <div>
              <h3 className="text-2xl font-semibold text-[#145c3e]">
                A Closer Look at Our Specialized Services
              </h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-[#4a5a52]">
                Beyond removal and pruning, we evaluate tree health, reinforce valuable shade trees,
                grind stumps below grade, and install lightning protection and deep root
                fertilization.
              </p>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/services');
                }}
                className="mt-5 inline-flex whitespace-nowrap rounded-md border border-[#d5ddd8] px-5 py-2.5 text-sm font-semibold text-[#145c3e] transition-colors hover:border-[#145c3e] hover:bg-[#eef3f0]"
              >
                View All Services
              </a>
            </div>

            <ul className="divide-y divide-[#d5ddd8] border-y border-[#d5ddd8]">
              {specializedServices.map((specialty) => {
                const href = `/services/${specialty.slug}`;
                return (
                  <li key={specialty.id}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(href);
                      }}
                      className="grid w-full grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1.5 px-1 py-4 text-left transition-all duration-150 hover:bg-[#eef3f0] hover:px-3 md:grid-cols-[minmax(12rem,0.9fr)_1fr_auto]"
                    >
                      <span className="text-[1.08rem] font-semibold text-[#145c3e]">
                        {specialty.title}
                      </span>
                      <span className="col-span-2 text-[0.94rem] text-[#4a5a52] md:col-span-1">
                        {specialty.shortDescription}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 justify-self-end text-[#14663f]"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Deep Woodland Heritage & The Giraffe Difference */}
      <section className="bg-[#145c3e] py-16 text-[#ffffff] lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 border-b border-[#ffffff]/15 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#0e3d2a]">
              <ResilientImage
                src={HERITAGE_IMAGE.src}
                alt={HERITAGE_IMAGE.alt}
                fallbackTitle="Little Rock's Tree Experts Since 1996"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffffff] sm:text-4xl">
                The Giraffe Difference
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[#e7f3ec]">
                Giraffe Tree Service was founded in Little Rock in 1996 with a straightforward
                mission: to deliver the highest level of professional tree care to homeowners and
                businesses across Central Arkansas. Under the leadership of President Dean Goodson,
                what began as a small operation has grown into one of the region&rsquo;s most
                trusted names in tree care.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[#e7f3ec]">
                We hold ourselves to a higher standard because your trees, your property, and your
                family&rsquo;s safety deserve nothing less.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                  }}
                  className="whitespace-nowrap rounded-md bg-[#1a7a4c] px-5 py-3 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#14663f]"
                >
                  Read Our Story
                </a>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/blog');
                  }}
                  className="whitespace-nowrap rounded-md border border-[#ffffff]/35 px-5 py-3 text-sm font-semibold text-[#ffffff] transition-colors hover:border-[#ffffff] hover:bg-[#ffffff]/10"
                >
                  Read Our Blog
                </a>
              </div>
            </div>
          </div>

          {/* 4 Architectural Ruled Pillars */}
          <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {GIRAFFE_PILLARS.map((pillar) => (
              <div key={pillar.number} className="border-t border-white/25 pt-5">
                <h3 className="text-xl font-bold text-[#ffffff]">{pillar.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#c5d5cc]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 24/7 Emergency Storm Response Band */}
      <section
        aria-label="24/7 Emergency Tree Service"
        className="border-y border-[#d5ddd8] bg-[#eef3f0] py-10"
      >
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#14663f]">
              24/7 Emergency Storm Dispatch
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-[#145c3e] sm:text-[1.75rem]">
              Storm Damage? Our Emergency Crew Is Always Available.
            </h2>
            <p className="mt-2 text-[0.98rem] text-[#4a5a52]">
              Stay clear of downed power lines and hanging limbs. Call us anytime for rapid response
              across Little Rock, North Little Rock, Pulaski County, and surrounding communities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-[#145c3e] px-5 py-3 text-sm font-semibold text-[#ffffff] tabular-nums transition-colors hover:bg-[#14663f]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href="/services/storm-damage-cleanup"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services/storm-damage-cleanup');
              }}
              className="whitespace-nowrap rounded-md border border-[#d5ddd8] bg-[#ffffff] px-5 py-3 text-sm font-semibold text-[#145c3e] transition-colors hover:border-[#145c3e]"
            >
              Storm Cleanup Details
            </a>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials Spotlight */}
      <section className="border-b border-[#d5ddd8] py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-12">
          <div>
            <h2 className="text-3xl font-bold text-[#145c3e] sm:text-4xl">
              Words from Central Arkansas Clients
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-[#4a5a52]">
              Our commitment to honest assessments, safe rigging, and thorough cleanup shows up in
              how neighbors talk about having our crews on their property.
            </p>

            <div className="mt-7 border-t border-[#d5ddd8] pt-5">
              <p className="text-2xl font-bold text-[#145c3e] tabular-nums">
                91+ 5-Star Reviews
              </p>
              <p className="mt-1 text-sm text-[#4a5a52]">
                Serving Little Rock homeowners, builders, and property managers since 1996.
              </p>
            </div>
          </div>

          <div>
            <figure className="border-b border-[#d5ddd8] pb-8">
              <blockquote className="text-xl leading-relaxed text-[#145c3e] sm:text-2xl">
                &ldquo;{featuredQuote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-[#14663f]">
                <span>
                  {featuredQuote.author}{' '}
                  <span className="font-normal text-[#4a5a52]">· {featuredQuote.context}</span>
                </span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
              {secondaryQuotes.map((item) => (
                <figure key={item.id}>
                  <blockquote className="text-[1rem] leading-relaxed text-[#4a5a52]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3.5 text-sm font-semibold text-[#145c3e]">
                    <span>
                      {item.author}
                      <span className="mt-0.5 block text-xs font-normal text-[#4a5a52]">
                        {item.context}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Central Arkansas Service Area & Final Call to Action */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[6px] border border-[#d5ddd8] bg-[#eef3f0] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between p-5 sm:p-8">
              <div>
                <h2 className="text-3xl font-bold text-[#145c3e] sm:text-4xl">
                  Schedule Your Free, No-Obligation Estimate
                </h2>
                <p className="mt-3.5 max-w-xl text-[1rem] leading-relaxed text-[#4a5a52]">
                  Select your county or metro area below to review local service coverage, or visit
                  our contact page to book an on-site property walk.
                </p>

                <div
                  className="mt-6 flex flex-wrap gap-1.5 rounded-md border border-[#d5ddd8] bg-[#ffffff] p-1.5"
                  role="tablist"
                  aria-label="Central Arkansas Service Regions"
                >
                  {SERVICE_AREAS.map((area) => {
                    const isActive = area.id === selectedArea.id;
                    return (
                      <button
                        key={area.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setSelectedAreaId(area.id)}
                        className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                          isActive
                            ? 'bg-[#145c3e] text-[#ffffff]'
                            : 'text-[#4a5a52] hover:bg-[#eef3f0] hover:text-[#145c3e]'
                        }`}
                      >
                        {area.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 border-t border-[#d5ddd8] pt-4 text-sm">
                  <p className="font-semibold text-[#145c3e]">
                    Communities:{' '}
                    <span className="font-normal text-[#4a5a52]">{selectedArea.communities}</span>
                  </p>
                  <p className="mt-1.5 font-semibold text-[#145c3e]">
                    Typical Work:{' '}
                    <span className="font-normal text-[#4a5a52]">{selectedArea.focus}</span>
                  </p>
                  <p className="mt-1.5 font-medium text-[#14663f]">{selectedArea.dispatchNote}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3.5">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact', {hash: 'estimate-request'});
                  }}
                  className="whitespace-nowrap rounded-md bg-[#145c3e] px-6 py-3 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#14663f]"
                >
                  Request a Free Estimate Today
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[#d5ddd8] bg-[#ffffff] px-5 py-3 text-sm font-semibold text-[#145c3e] tabular-nums transition-colors hover:border-[#145c3e]"
                >
                  <Phone className="h-4 w-4 text-[#14663f]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="relative h-52 bg-[#145c3e] sm:h-60 lg:h-full">
              <div className="absolute inset-0">
                <ResilientImage
                  src={CTA_IMAGE.src}
                  alt={CTA_IMAGE.alt}
                  fallbackTitle="On-site estimate with a Giraffe Tree Service crew"
                  className="h-full w-full object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
