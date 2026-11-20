import {useState} from 'react';
import {Clock, Mail, MapPin, Phone} from 'lucide-react';
import {EstimateSection} from '../components/EstimateSection';
import {COMPANY_INFO, SERVICE_AREAS} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

export function ContactPage() {
  const {navigate, preselectedService} = useRouter();
  const [selectedAreaId, setSelectedAreaId] = useState<string>(SERVICE_AREAS[0].id);

  const selectedArea =
    SERVICE_AREAS.find((area) => area.id === selectedAreaId) ?? SERVICE_AREAS[0];

  return (
    <div>
      {/* Header & Office Summary */}
      <section className="border-b border-[#d5ddd8] bg-[#ffffff] py-12 lg:py-16">
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
            <span className="font-semibold text-[#145c3e]">Contact</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <h1 className="text-[clamp(2rem,3.2vw,2.75rem)] font-bold leading-tight text-[#145c3e]">
                Contact Giraffe Tree Service
              </h1>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#4a5a52]">
                Call our Little Rock office for scheduled estimates or 24/7 storm emergencies, or
                complete the estimate form below and we will follow up to walk your property.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#d5ddd8] pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#14663f]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semiboldr text-[#145c3e] uppercase">
                      Office Address
                    </p>
                    <a
                      href="https://maps.google.com/?q=512+Bender+St+Little+Rock+AR+72202"
                      className="mt-1 block text-[0.96rem] text-[#4a5a52] underline decoration-[#d5ddd8] underline-offset-4 hover:text-[#145c3e] hover:decoration-[#145c3e]"
                    >
                      {COMPANY_INFO.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#14663f]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semiboldr text-[#145c3e] uppercase">
                      Phone &amp; 24/7 Storm Line
                    </p>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="mt-1 block text-[1.05rem] font-bold text-[#145c3e] tabular-nums hover:underline"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[#14663f]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semiboldr text-[#145c3e] uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="mt-1 block text-[0.96rem] font-medium text-[#145c3e] underline decoration-[#d5ddd8] underline-offset-4 hover:decoration-[#145c3e]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#14663f]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semiboldr text-[#145c3e] uppercase">
                      Hours
                    </p>
                    <p className="mt-1 text-[0.95rem] text-[#4a5a52]">
                      Office: {COMPANY_INFO.officeHours}
                      <br />
                      Emergency: {COMPANY_INFO.emergencyHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive County Coverage */}
            <div className="rounded-md border border-[#d5ddd8] bg-[#ffffff] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-[#145c3e]">
                Central Arkansas Service Footprint
              </h2>
              <p className="mt-2 text-sm text-[#4a5a52]">
                Select a county or metro corridor to inspect local crew availability.
              </p>

              <div
                className="mt-5 flex flex-wrap gap-1.5 rounded-md border border-[#d5ddd8] bg-[#ffffff] p-1.5"
                role="tablist"
                aria-label="Service Counties"
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

              <div className="mt-5 space-y-2 border-t border-[#d5ddd8] pt-4 text-sm">
                <p className="font-semibold text-[#145c3e]">
                  Communities:{' '}
                  <span className="font-normal text-[#4a5a52]">{selectedArea.communities}</span>
                </p>
                <p className="font-semibold text-[#145c3e]">
                  Primary Focus:{' '}
                  <span className="font-normal text-[#4a5a52]">{selectedArea.focus}</span>
                </p>
                <p className="font-medium text-[#14663f]">{selectedArea.dispatchNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Estimate Form Section */}
      <EstimateSection preselectedService={preselectedService} />

      <section className="border-b border-[#d5ddd8] bg-[#ffffff] py-12 lg:py-16" aria-label="Office map">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[#14663f]">Find the Office</p>
              <h2 className="mt-1 text-2xl font-semibold text-[#145c3e] sm:text-3xl">
                512 Bender St, Little Rock
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=512+Bender+St+Little+Rock+AR+72202"
              className="text-sm font-semibold text-[#145c3e] underline decoration-[#d5ddd8] underline-offset-4 hover:decoration-[#145c3e]"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-[6px] border border-[#d5ddd8]">
            <iframe
              title="Giraffe Tree Service location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.621327533897!2d-92.34464240443445!3d34.76513060987559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2bb8e2fcbf1e1%3A0x414fdb3673eb665a!2sGiraffe%20Tree%20Services!5e0!3m2!1sen!2sus!4v1775232778554!5m2!1sen!2sus"
              className="h-[420px] w-full border-0 sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
