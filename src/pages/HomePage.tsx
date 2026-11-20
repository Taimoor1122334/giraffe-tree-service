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
      <section className="relative overflow-hidden bg-[#132219] text-[#f7f4ee]">
        <div className="absolute inset-0" aria-hidden="true">
          <ResilientImage
            src={HERO_IMAGE.src}
            alt=""
            fallbackTitle="Giraffe Tree Service · Little Rock, AR"
            loading="eager"
            className="h-full w-full object-cover object-[70%_55%] lg:object-[74%_62%]"
          />
          <div className="absolute inset-0 bg-[#132219]/45 lg:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132219] via-[#132219]/80 to-[#132219]/30 lg:bg-gradient-to-r lg:from-[#132219] lg:via-[#132219]/72 lg:to-[#132219]/5" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-[1600px] flex-col justify-end px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[760px] lg:justify-center lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#d6a46f]">
              <span className="h-[2px] w-6 bg-[#d6a46f]" aria-hidden="true" />
              <span>Central Arkansas Tree Care · Since 1996</span>
            </div>

            <h1 className="mt-4 text-[clamp(2.6rem,4.8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#f7f4ee]">
              Expert Tree Care for a Safer, More Beautiful Property.
            </h1>

            <p className="mt-5 max-w-xl text-[1.125rem] leading-relaxed text-[#e7e3da]">
              Giraffe Tree Service provides dependable, safety-first tree care for residential,
              commercial, and municipal properties across Little Rock and Central Arkansas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToEstimate()}
                className="cursor-pointer whitespace-nowrap rounded-[3px] bg-[#b57435] px-6 py-3.5 text-[0.98rem] font-semibold text-[#fcfbf8] transition-colors duration-150 hover:bg-[#935b25]"
              >
                Get a Free Estimate
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-[#f7f4ee]/40 px-5 py-3.5 text-[0.98rem] font-semibold text-[#f7f4ee] tabular-nums transition-colors duration-150 hover:border-[#f7f4ee] hover:bg-[#f7f4ee]/10"
              >
                <Phone className="h-4 w-4 text-[#d6a46f]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <dl
            className="mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 border-t border-[#f7f4ee]/20 pt-7 md:grid-cols-4 lg:mt-16"
            aria-label="Company Track Record"
          >
            {TRACK_RECORD.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-[#e7e3da]">{stat.label}</dt>
                <dd className="mt-1 font-serif text-2xl font-bold text-[#f7f4ee] tabular-nums sm:text-[1.85rem]">
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
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#dad3c5] pb-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#935b25]">
                <span className="h-[2px] w-6 bg-[#b57435]" aria-hidden="true" />
                <span>Our Services</span>
              </div>
              <h2 className="mt-3.5 text-3xl font-semibold text-[#1c3326] sm:text-4xl">
                Comprehensive Tree Care for Your Property
              </h2>
            </div>
            <p className="max-w-md text-[1rem] leading-relaxed text-[#4d5750]">
              From selective shade-tree pruning and health assessments to crane-assisted removals
              and land clearing, every job draws on nearly three decades of Central Arkansas field
              experience.
            </p>
          </div>

          {/* Staggered Editorial 2-Up Grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {primaryServices.map((service, index) => {
              const isOffset = index % 2 === 1;
              const isTall = index === 0 || index === 3;
              const serviceHref = `/services/${service.slug}`;
              return (
                <article
                  key={service.id}
                  className={`flex flex-col ${isOffset ? 'md:mt-10' : ''}`}
                >
                  <a
                    href={serviceHref}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(serviceHref);
                    }}
                    className={`group block w-full overflow-hidden rounded-[6px] bg-[#efece4] ${
                      isTall ? 'aspect-[4/3]' : 'aspect-[16/10]'
                    }`}
                  >
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>

                  <div className="pt-5">
                    <p className="text-xs font-semibold tracking-wide text-[#935b25]">
                      {service.categoryLabel}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-semibold text-[#1c3326]">
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
                    <p className="mt-2.5 text-[1rem] leading-relaxed text-[#4d5750]">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-5">
                      <a
                        href={serviceHref}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(serviceHref);
                        }}
                        className="inline-flex items-center gap-1.5 border-b border-[#1c3326]/30 pb-0.5 text-sm font-semibold text-[#1c3326] transition-colors hover:border-[#1c3326]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(service.estimateOption)}
                        className="cursor-pointer text-sm font-semibold text-[#935b25] transition-colors hover:text-[#1c3326]"
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
          <div className="mt-16 grid grid-cols-1 items-start gap-8 border-t border-[#dad3c5] pt-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
            <div>
              <h3 className="text-2xl font-semibold text-[#1c3326]">
                A Closer Look at Our Specialized Services
              </h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-[#4d5750]">
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
                className="mt-5 inline-flex whitespace-nowrap rounded-[3px] border border-[#dad3c5] px-5 py-2.5 text-sm font-semibold text-[#1c3326] transition-colors hover:border-[#1c3326] hover:bg-[#efece4]"
              >
                View All Services
              </a>
            </div>

            <ul className="divide-y divide-[#dad3c5] border-y border-[#dad3c5]">
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
                      className="grid w-full grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1.5 px-1 py-4 text-left transition-all duration-150 hover:bg-[#efece4] hover:px-3 md:grid-cols-[minmax(12rem,0.9fr)_1fr_auto]"
                    >
                      <span className="font-serif text-[1.08rem] font-semibold text-[#1c3326]">
                        {specialty.title}
                      </span>
                      <span className="col-span-2 text-[0.94rem] text-[#4d5750] md:col-span-1">
                        {specialty.shortDescription}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 justify-self-end text-[#935b25]"
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
      <section className="bg-[#1c3326] py-16 text-[#f7f4ee] lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 border-b border-[#f7f4ee]/15 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#132219]">
              <ResilientImage
                src={HERITAGE_IMAGE.src}
                alt={HERITAGE_IMAGE.alt}
                fallbackTitle="Little Rock's Tree Experts Since 1996"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#d6a46f]">
                <span className="h-[2px] w-6 bg-[#d6a46f]" aria-hidden="true" />
                <span>Little Rock&rsquo;s Tree Experts Since 1996</span>
              </div>
              <h2 className="mt-3.5 text-3xl font-semibold text-[#f7f4ee] sm:text-4xl">
                The Giraffe Difference
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed tracking-[0.005em] text-[#e7e3da]">
                Giraffe Tree Service was founded in Little Rock in 1996 with a straightforward
                mission: to deliver the highest level of professional tree care to homeowners and
                businesses across Central Arkansas. Under the leadership of President Dean Goodson,
                what began as a small operation has grown into one of the region&rsquo;s most
                trusted names in tree care.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed tracking-[0.005em] text-[#e7e3da]">
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
                  className="whitespace-nowrap rounded-[3px] bg-[#b57435] px-5 py-3 text-sm font-semibold text-[#fcfbf8] transition-colors hover:bg-[#935b25]"
                >
                  Read Our Story
                </a>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/blog');
                  }}
                  className="whitespace-nowrap rounded-[3px] border border-[#f7f4ee]/35 px-5 py-3 text-sm font-semibold text-[#f7f4ee] transition-colors hover:border-[#f7f4ee] hover:bg-[#f7f4ee]/10"
                >
                  Read Our Blog
                </a>
              </div>
            </div>
          </div>

          {/* 4 Architectural Ruled Pillars */}
          <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {GIRAFFE_PILLARS.map((pillar) => (
              <div key={pillar.number} className="border-t border-[#d6a46f]/45 pt-5">
                <span className="font-serif text-sm text-[#d6a46f] tabular-nums">
                  {pillar.number}
                </span>
                <h3 className="mt-1.5 text-xl font-semibold text-[#f7f4ee]">{pillar.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed tracking-[0.005em] text-[#cbd4cd]">
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
        className="border-y border-[#dad3c5] bg-[#efece4] py-10"
      >
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#935b25]">
              24/7 Emergency Storm Dispatch
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-[#1c3326] sm:text-[1.75rem]">
              Storm Damage? Our Emergency Crew Is Always Available.
            </h2>
            <p className="mt-2 text-[0.98rem] text-[#4d5750]">
              Stay clear of downed power lines and hanging limbs. Call us anytime for rapid response
              across Little Rock, North Little Rock, Pulaski County, and surrounding communities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] bg-[#1c3326] px-5 py-3 text-sm font-semibold text-[#f7f4ee] tabular-nums transition-colors hover:bg-[#284635]"
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
              className="whitespace-nowrap rounded-[3px] border border-[#dad3c5] bg-[#fcfbf8] px-5 py-3 text-sm font-semibold text-[#1c3326] transition-colors hover:border-[#1c3326]"
            >
              Storm Cleanup Details
            </a>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials Spotlight */}
      <section className="border-b border-[#dad3c5] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-12">
          <div>
            <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#935b25]">
              <span className="h-[2px] w-6 bg-[#b57435]" aria-hidden="true" />
              <span>Trusted by Homeowners Like You</span>
            </div>
            <h2 className="mt-3.5 text-3xl font-semibold text-[#1c3326] sm:text-4xl">
              Words from Central Arkansas Clients
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-[#4d5750]">
              Our commitment to honest assessments, safe rigging, and thorough cleanup shows up in
              how neighbors talk about having our crews on their property.
            </p>

            <div className="mt-7 border-t border-[#dad3c5] pt-5">
              <p className="font-serif text-2xl font-bold text-[#1c3326] tabular-nums">
                91+ 5-Star Reviews
              </p>
              <p className="mt-1 text-sm text-[#4d5750]">
                Serving Little Rock homeowners, builders, and property managers since 1996.
              </p>
            </div>
          </div>

          <div>
            <figure className="border-b border-[#dad3c5] pb-8">
              <blockquote className="font-serif text-xl leading-relaxed text-[#1c3326] sm:text-2xl">
                &ldquo;{featuredQuote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#935b25]">
                <img
                  src={featuredQuote.avatar}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span>
                  &mdash; {featuredQuote.author}{' '}
                  <span className="font-normal text-[#4d5750]">· {featuredQuote.context}</span>
                </span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
              {secondaryQuotes.map((item) => (
                <figure key={item.id}>
                  <blockquote className="text-[1rem] leading-relaxed text-[#4d5750]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3.5 flex items-center gap-3 text-sm font-semibold text-[#1c3326]">
                    <img
                      src={item.avatar}
                      alt=""
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                    <span>
                      &mdash; {item.author}
                      <span className="mt-0.5 block text-xs font-normal text-[#4d5750]">
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
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[6px] border border-[#dad3c5] bg-[#efece4] lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div>
                <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#935b25]">
                  <span className="h-[2px] w-6 bg-[#b57435]" aria-hidden="true" />
                  <span>Central Arkansas Coverage</span>
                </div>
                <h2 className="mt-3.5 text-3xl font-semibold text-[#1c3326] sm:text-4xl">
                  Schedule Your Free, No-Obligation Estimate
                </h2>
                <p className="mt-3.5 max-w-xl text-[1rem] leading-relaxed text-[#4d5750]">
                  Select your county or metro area below to review local service coverage, or visit
                  our contact page to book an on-site property walk.
                </p>

                <div
                  className="mt-6 flex flex-wrap gap-1.5 rounded-[4px] border border-[#dad3c5] bg-[#f7f4ee] p-1.5"
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
                        className={`cursor-pointer rounded-[3px] px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                          isActive
                            ? 'bg-[#1c3326] text-[#f7f4ee]'
                            : 'text-[#4d5750] hover:bg-[#efece4] hover:text-[#1c3326]'
                        }`}
                      >
                        {area.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 border-t border-[#dad3c5] pt-4 text-sm">
                  <p className="font-semibold text-[#1c3326]">
                    Communities:{' '}
                    <span className="font-normal text-[#4d5750]">{selectedArea.communities}</span>
                  </p>
                  <p className="mt-1.5 font-semibold text-[#1c3326]">
                    Typical Work:{' '}
                    <span className="font-normal text-[#4d5750]">{selectedArea.focus}</span>
                  </p>
                  <p className="mt-1.5 font-medium text-[#935b25]">{selectedArea.dispatchNote}</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact', {hash: 'estimate-request'});
                  }}
                  className="whitespace-nowrap rounded-[3px] bg-[#1c3326] px-6 py-3 text-sm font-semibold text-[#f7f4ee] transition-colors hover:bg-[#284635]"
                >
                  Request a Free Estimate Today
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-[#dad3c5] bg-[#fcfbf8] px-5 py-3 text-sm font-semibold text-[#1c3326] tabular-nums transition-colors hover:border-[#1c3326]"
                >
                  <Phone className="h-4 w-4 text-[#935b25]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="min-h-[280px] bg-[#1c3326] lg:h-full">
              <ResilientImage
                src={CTA_IMAGE.src}
                alt={CTA_IMAGE.alt}
                fallbackTitle="Stump Grinding & Property Cleanup"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
