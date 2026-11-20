import {useEffect, useState, type FormEvent} from 'react';
import {AlertCircle, CheckCircle2} from 'lucide-react';
import {COMPANY_INFO} from '../data/treeServiceData';

interface EstimateSectionProps {
  preselectedService: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
}

interface SubmittedEstimate {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  submittedAt: string;
}

const SERVICE_OPTIONS = [
  'Tree Removal',
  'Tree Trimming & Pruning',
  'Stump Grinding',
  'Emergency Tree Service',
  'Other',
];

export function EstimateSection({preselectedService}: EstimateSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    service: preselectedService || '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<SubmittedEstimate | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({...prev, service: preselectedService}));
      setSubmitted(null);
      setErrors((prev) => ({...prev, service: undefined}));
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Please enter a 10-digit phone number so our estimator can reach you.';
    }
    if (!form.service) {
      nextErrors.service = 'Please select the service you need.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service,
      submittedAt: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    });
    setForm({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section
      id="estimate-request"
      className="border-b border-[#d5ddd8] bg-[#eef3f0] py-12 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">
        {/* Heritage & On-Site Assessment Narrative */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#145c3e] sm:text-4xl">
            Honest Assessment First. Precision Work Every Time.
          </h2>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-[#4a5a52]">
            Whether you need a single hazardous oak safely rigged down over a roofline, routine
            pruning to protect a mature shade tree, or full lot clearing before construction, we walk
            the property with you and explain your options plainly.
          </p>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-[#4a5a52]">
            Our experienced crews use modern cranes, rigging gear, and industry best practices to
            protect your lawn, structures, and surrounding landscape, leaving your yard cleaner than
            we found it.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#d5ddd8] pt-6 sm:grid-cols-2">
            <div>
              <h3 className="font-sans text-xs font-semiboldr text-[#145c3e] uppercase">
                Service Area
              </h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[#4a5a52]">
                Little Rock, North Little Rock, Pulaski, Lonoke, Saline, Faulkner &amp; Perry
                counties.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semiboldr text-[#145c3e] uppercase">
                Little Rock Office
              </h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[#4a5a52]">
                {COMPANY_INFO.address}
                <br />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-medium text-[#145c3e] underline decoration-[#d5ddd8] underline-offset-4 hover:decoration-[#145c3e]"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Estimate Request Form Card */}
        <div className="rounded-md border border-[#d5ddd8] bg-[#ffffff] p-6 sm:p-9">
          <h3 className="text-2xl font-semibold text-[#145c3e]">Request a Free Estimate</h3>
          <p className="mt-1.5 text-[0.95rem] text-[#4a5a52]">
            Tell us about your trees or property for a free, no-obligation quote with no hidden
            fees.
          </p>

          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 rounded-md border border-[#b9cbbd] bg-[#eef3ef] p-5 text-[#145c3e]"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#145c3e]" aria-hidden="true" />
                <div>
                  <p className="text-lg font-semibold">
                    Estimate Request Prepared for {submitted.fullName}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#14663f]">
                    Service selected: <strong>{submitted.service}</strong> · Contact:{' '}
                    <span className="tabular-nums">{submitted.phone}</span> ({submitted.email}) ·
                    Recorded at <span className="tabular-nums">{submitted.submittedAt}</span>.
                  </p>
                  <p className="mt-2.5 text-sm text-[#14663f]">
                    For immediate storm response or same-day scheduling, call our Little Rock office
                    directly at{' '}
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="font-bold underline tabular-nums"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(null)}
                    className="mt-4 cursor-pointer rounded-md border border-[#145c3e]/30 px-4 py-2 text-sm font-semibold text-[#145c3e] transition-colors hover:bg-[#145c3e] hover:text-[#ffffff]"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="estimate-full-name"
                  className="block text-sm font-semibold text-[#1b2e24]"
                >
                  Full Name
                </label>
                <input
                  id="estimate-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={(e) => {
                    setForm((prev) => ({...prev, fullName: e.target.value}));
                    if (errors.fullName) setErrors((prev) => ({...prev, fullName: undefined}));
                  }}
                  aria-invalid={Boolean(errors.fullName)}
                  className="mt-1.5 w-full rounded-md border border-[#d5ddd8] bg-[#ffffff] px-3.5 py-2.5 text-[0.98rem] text-[#1b2e24] transition-colors focus:border-[#145c3e] focus:bg-[#ffffff] focus:outline-none"
                />
                {errors.fullName && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="estimate-email"
                    className="block text-sm font-semibold text-[#1b2e24]"
                  >
                    Email
                  </label>
                  <input
                    id="estimate-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm((prev) => ({...prev, email: e.target.value}));
                      if (errors.email) setErrors((prev) => ({...prev, email: undefined}));
                    }}
                    aria-invalid={Boolean(errors.email)}
                    className="mt-1.5 w-full rounded-md border border-[#d5ddd8] bg-[#ffffff] px-3.5 py-2.5 text-[0.98rem] text-[#1b2e24] transition-colors focus:border-[#145c3e] focus:bg-[#ffffff] focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="estimate-phone"
                    className="block text-sm font-semibold text-[#1b2e24]"
                  >
                    Phone
                  </label>
                  <input
                    id="estimate-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(501) 555-0199"
                    value={form.phone}
                    onChange={(e) => {
                      setForm((prev) => ({...prev, phone: e.target.value}));
                      if (errors.phone) setErrors((prev) => ({...prev, phone: undefined}));
                    }}
                    aria-invalid={Boolean(errors.phone)}
                    className="mt-1.5 w-full rounded-md border border-[#d5ddd8] bg-[#ffffff] px-3.5 py-2.5 text-[0.98rem] text-[#1b2e24] tabular-nums transition-colors focus:border-[#145c3e] focus:bg-[#ffffff] focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="estimate-service"
                  className="block text-sm font-semibold text-[#1b2e24]"
                >
                  I&rsquo;m interested in&hellip;
                </label>
                <select
                  id="estimate-service"
                  name="service"
                  value={form.service}
                  onChange={(e) => {
                    setForm((prev) => ({...prev, service: e.target.value}));
                    if (errors.service) setErrors((prev) => ({...prev, service: undefined}));
                  }}
                  aria-invalid={Boolean(errors.service)}
                  className="mt-1.5 w-full rounded-md border border-[#d5ddd8] bg-[#ffffff] px-3.5 py-2.5 text-[0.98rem] text-[#1b2e24] transition-colors focus:border-[#145c3e] focus:bg-[#ffffff] focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="estimate-message"
                  className="block text-sm font-semibold text-[#1b2e24]"
                >
                  Property &amp; Tree Details
                </label>
                <textarea
                  id="estimate-message"
                  name="message"
                  rows={3}
                  placeholder="Share a brief note about the tree, stump, lot, or storm damage..."
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({...prev, message: e.target.value}))}
                  className="mt-1.5 w-full rounded-md border border-[#d5ddd8] bg-[#ffffff] px-3.5 py-2.5 text-[0.98rem] text-[#1b2e24] transition-colors focus:border-[#145c3e] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="cursor-pointer whitespace-nowrap rounded-md bg-[#145c3e] px-6 py-3 text-[0.96rem] font-semibold text-[#ffffff] transition-colors duration-150 hover:bg-[#14663f]"
                >
                  Get Your Free Quote
                </button>
                <p className="text-sm text-[#4a5a52]">
                  Urgent storm damage? Call{' '}
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="font-bold text-[#145c3e] underline decoration-[#d5ddd8] underline-offset-4 tabular-nums hover:decoration-[#145c3e]"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>{' '}
                  24/7.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
