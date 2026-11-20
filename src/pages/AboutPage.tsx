import {Phone} from 'lucide-react';
import {ResilientImage} from '../components/ResilientImage';
import {
  COMPANY_INFO,
  GIRAFFE_PILLARS,
  HERITAGE_IMAGE,
  HERO_IMAGE,
  TESTIMONIALS,
} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

export function AboutPage() {
  const {navigate} = useRouter();

  return (
    <div>
      {/* Editorial Header */}
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
            <span className="font-semibold text-[#145c3e]">About</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <h1 className="text-[clamp(2rem,3.2vw,2.75rem)] font-bold leading-tight text-[#145c3e]">
                Nearly Three Decades of Honest Central Arkansas Tree Care
              </h1>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#4a5a52]">
                Founded in Little Rock in 1996 and led by President{' '}
                <strong className="font-semibold text-[#145c3e]">{COMPANY_INFO.president}</strong>,
                Giraffe Tree Service has grown from a small local operation into one of Central
                Arkansas&rsquo;s most trusted residential, commercial, and municipal tree care
                partners.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => navigate('/contact', {hash: 'estimate-request'})}
                  className="cursor-pointer whitespace-nowrap rounded-md bg-[#145c3e] px-6 py-3 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#14663f]"
                >
                  Request a Free Estimate
                </button>
                <a
                  href="/employment"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/employment');
                  }}
                  className="whitespace-nowrap rounded-md border border-[#d5ddd8] bg-[#ffffff] px-5 py-3 text-sm font-semibold text-[#145c3e] transition-colors hover:border-[#145c3e]"
                >
                  Join Our Crew
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#145c3e]">
              <ResilientImage
                src={HERITAGE_IMAGE.src}
                alt={HERITAGE_IMAGE.alt}
                fallbackTitle="Giraffe Tree Service · Est. 1996"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Field Standards */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">
          <div className="aspect-[5/4] w-full overflow-hidden rounded-[6px] bg-[#145c3e]">
            <ResilientImage
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fallbackTitle="Little Rock Crew Operations"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#145c3e]">
              Plain-Spoken Guidance Backed by Modern Equipment
            </h2>
            <p className="mt-4 text-[1.03rem] leading-relaxed text-[#4a5a52]">
              Tree work around homes, roofs, fences, and power lines leaves zero room for shortcuts.
              We invest in modern cranes, high-capacity wood chippers, tracked gate-width stump
              grinders, and forestry mulchers so crews can work safely without tearing up lawns.
            </p>
            <p className="mt-4 text-[1.03rem] leading-relaxed text-[#4a5a52]">
              Just as important, we give you straightforward advice. If a mature oak can be
              preserved with selective crown reduction and cabling, we tell you. If decay or root
              instability means cabling will not save it, we explain plainly why removal is the
              safer option.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-6 border-t border-[#d5ddd8] pt-6">
              <div>
                <span className="block text-2xl font-bold text-[#145c3e] tabular-nums">
                  1996
                </span>
                <span className="text-sm text-[#4a5a52]">Established in Little Rock</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#145c3e] tabular-nums">
                  91+
                </span>
                <span className="text-sm text-[#4a5a52]">5-Star Homeowner Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Giraffe Difference Pillars */}
      <section className="bg-[#145c3e] py-14 text-[#ffffff] lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-[#ffffff] sm:text-4xl">
              The Giraffe Difference
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {GIRAFFE_PILLARS.map((pillar) => (
              <div key={pillar.number} className="border-t border-[#cfe8da]/45 pt-5">
                <span className="text-sm text-[#cfe8da] tabular-nums">
                  {pillar.number}
                </span>
                <h3 className="mt-1.5 text-xl font-semibold text-[#ffffff]">{pillar.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#c5d5cc]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof & Direct Contact */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-semibold text-[#145c3e] sm:text-3xl">
            What Central Arkansas Clients Say
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-[#d5ddd8] pt-8 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure key={item.id}>
                <blockquote className="text-[1rem] leading-relaxed text-[#4a5a52]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3.5 text-sm font-semibold text-[#145c3e]">
                  &mdash; {item.author}
                  <span className="mt-0.5 block text-xs font-normal text-[#4a5a52]">
                    {item.context}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[#d5ddd8] pt-8">
            <div>
              <p className="text-xl font-semibold text-[#145c3e]">
                Ready to walk your property?
              </p>
              <p className="mt-1 text-sm text-[#4a5a52]">
                {COMPANY_INFO.address} · {COMPANY_INFO.officeHours} · Emergency{' '}
                {COMPANY_INFO.emergencyHours}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[#d5ddd8] bg-[#ffffff] px-5 py-2.5 text-sm font-semibold text-[#145c3e] tabular-nums hover:border-[#145c3e]"
              >
                <Phone className="h-4 w-4 text-[#14663f]" aria-hidden="true" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => navigate('/contact', {hash: 'estimate-request'})}
                className="cursor-pointer whitespace-nowrap rounded-md bg-[#145c3e] px-5 py-2.5 text-sm font-semibold text-[#ffffff] hover:bg-[#14663f]"
              >
                Get a Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
