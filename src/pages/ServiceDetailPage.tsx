import {useState} from 'react';
import {ArrowRight, Check, ChevronDown, Phone} from 'lucide-react';
import {EstimateSection} from '../components/EstimateSection';
import {ResilientImage} from '../components/ResilientImage';
import {ALL_SERVICES, COMPANY_INFO, type ServiceDetail} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export function ServiceDetailPage({service}: ServiceDetailPageProps) {
  const {navigate} = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const relatedServices = ALL_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const scrollToPageEstimate = () => {
    const el = document.getElementById('estimate-request');
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div>
      {/* Breadcrumb & Service Hero */}
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
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services');
              }}
              className="hover:text-[#1c3326] hover:underline"
            >
              Services
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-semibold text-[#1c3326]">{service.title}</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="flex flex-col justify-center">
              <div className="text-sm font-semibold tracking-wide text-[#935b25]">
                <span>{service.categoryLabel}</span>
              </div>
              <h1 className="mt-3.5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-[#1c3326]">
                {service.title}
              </h1>
              <p className="mt-4 text-[1.08rem] leading-relaxed text-[#4d5750]">
                {service.overview}
              </p>

              <p className="mt-4 text-sm text-[#4d5750]">
                <strong className="font-semibold text-[#1c3326]">Typical Clients:</strong>{' '}
                {service.typicalClients}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={scrollToPageEstimate}
                  className="cursor-pointer whitespace-nowrap rounded-[3px] bg-[#1c3326] px-6 py-3 text-sm font-semibold text-[#f7f4ee] transition-colors hover:bg-[#284635]"
                >
                  Request {service.title} Quote
                </button>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-[#dad3c5] bg-[#fcfbf8] px-5 py-3 text-sm font-semibold text-[#1c3326] tabular-nums transition-colors hover:border-[#1c3326]"
                >
                  <Phone className="h-4 w-4 text-[#935b25]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#1c3326] lg:h-full">
              <ResilientImage
                src={service.image}
                alt={service.imageAlt}
                fallbackTitle={service.title}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope, Equipment & Candid Arborist Guidance */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#1c3326] sm:text-3xl">
              What Our Crew Handles
            </h2>
            <ul className="mt-5 space-y-3.5 border-y border-[#dad3c5] py-6">
              {service.whatWeDo.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[1rem] text-[#1d241f]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#1c3326]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-[#1c3326]">
              Equipment &amp; Field Setup
            </h3>
            <p className="mt-2 text-sm text-[#4d5750]">
              Depending on yard access and tree structure, our Little Rock dispatch equips crews
              with:
            </p>
            <p className="mt-2.5 text-[0.98rem] font-medium text-[#1c3326]">
              {service.equipmentUsed.join(' · ')}
            </p>
          </div>

          <aside className="rounded-[4px] border border-[#dad3c5] bg-[#fcfbf8] p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-[#935b25]">
              Plain-Spoken Guidance
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[#1c3326]">
              Honest Advice Before Any Work Begins
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4d5750]">
              {service.candidNote}
            </p>
            <div className="mt-6 border-t border-[#dad3c5] pt-5 text-sm text-[#4d5750]">
              <p className="font-semibold text-[#1c3326]">Service Area</p>
              <p className="mt-1">
                Little Rock, North Little Rock, Pulaski, Lonoke, Saline, Faulkner &amp; Perry
                counties.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* 3-Step On-Site Process */}
      <section className="border-y border-[#dad3c5] bg-[#1c3326] py-14 text-[#f7f4ee] lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-[#d6a46f]">
              How We Work on Your Property
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f4ee]">
              Our {service.title} Process
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {service.processSteps.map((step) => (
              <div key={step.number} className="border-t border-[#d6a46f]/45 pt-5">
                <span className="font-serif text-sm text-[#d6a46f] tabular-nums">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#f7f4ee]">{step.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#cbd4cd]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs + Related Services */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#1c3326] sm:text-3xl">
              Common Questions About {service.title}
            </h2>
            <div className="mt-6 divide-y divide-[#dad3c5] border-y border-[#dad3c5]">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.question} className="py-4">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-serif text-lg font-semibold text-[#1c3326]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#935b25] transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2.5 text-[0.98rem] leading-relaxed text-[#4d5750]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1c3326]">Related Services</h3>
            <ul className="mt-5 divide-y divide-[#dad3c5] border-y border-[#dad3c5]">
              {relatedServices.map((rel) => (
                <li key={rel.id}>
                  <a
                    href={`/services/${rel.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/services/${rel.slug}`);
                    }}
                    className="flex items-center justify-between gap-4 py-3.5 text-left transition-colors hover:text-[#1c3326]"
                  >
                    <div>
                      <p className="font-serif text-base font-semibold text-[#1c3326]">
                        {rel.title}
                      </p>
                      <p className="text-xs text-[#4d5750]">{rel.categoryLabel}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#935b25]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Embedded Free Estimate Section Pre-Selected for this Service */}
      <EstimateSection preselectedService={service.estimateOption} />
    </div>
  );
}
