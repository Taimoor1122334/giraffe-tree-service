import {useState, type FormEvent} from 'react';
import {AlertCircle, CheckCircle2, Mail, MapPin, Phone} from 'lucide-react';
import {ResilientImage} from '../components/ResilientImage';
import {COMPANY_INFO, CREW_IMAGE, JOB_OPENINGS} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

interface ApplicationFormState {
  fullName: string;
  phone: string;
  email: string;
  role: string;
  experience: string;
  notes: string;
}

interface ApplicationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  role?: string;
}

export function EmploymentPage() {
  const {navigate} = useRouter();
  const [form, setForm] = useState<ApplicationFormState>({
    fullName: '',
    phone: '',
    email: '',
    role: JOB_OPENINGS[0].title,
    experience: '',
    notes: '',
  });
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [submittedRole, setSubmittedRole] = useState<string>('');

  const handleSelectRole = (roleTitle: string) => {
    setForm((prev) => ({...prev, role: roleTitle}));
    setSubmittedName(null);
    const el = document.getElementById('crew-application');
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: ApplicationErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.role) {
      nextErrors.role = 'Please choose a position.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmittedName(form.fullName.trim());
    setSubmittedRole(form.role);
    setForm({
      fullName: '',
      phone: '',
      email: '',
      role: JOB_OPENINGS[0].title,
      experience: '',
      notes: '',
    });
  };

  return (
    <div>
      {/* Header */}
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
            <span className="font-semibold text-[#1c3326]">Employment</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#935b25]">
                <span className="h-[2px] w-6 bg-[#b57435]" aria-hidden="true" />
                <span>Join Our Little Rock Crews</span>
              </div>
              <h1 className="mt-3.5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-[#1c3326]">
                Build a Steady Career in Professional Tree Care
              </h1>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#4d5750]">
                Giraffe Tree Service has operated year-round out of Little Rock since 1996. We hire
                dependable climbers, equipment operators, and ground technicians who take pride in
                safe rigging and clean job sites.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 border-t border-[#dad3c5] pt-5 text-sm text-[#4d5750]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#935b25]" aria-hidden="true" />
                  <span>Morning dispatch: {COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#935b25]" aria-hidden="true" />
                  <a href={COMPANY_INFO.phoneHref} className="font-semibold text-[#1c3326] tabular-nums">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="aspect-[5/4] w-full overflow-hidden rounded-[6px] bg-[#1c3326]">
              <ResilientImage
                src={CREW_IMAGE.src}
                alt={CREW_IMAGE.alt}
                fallbackTitle="Giraffe Tree Service Crew"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles + Application Form */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
          {/* Open Positions */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1c3326] sm:text-3xl">
              Current Crew Openings
            </h2>
            <p className="mt-2.5 text-[1rem] text-[#4d5750]">
              Select a role below to pre-fill your application, or call our office to speak
              directly with our operations team.
            </p>

            <div className="mt-8 divide-y divide-[#dad3c5] border-y border-[#dad3c5]">
              {JOB_OPENINGS.map((job) => (
                <article key={job.id} className="py-6">
                  <p className="text-xs font-semibold tracking-wide text-[#935b25]">{job.type}</p>
                  <h3 className="mt-1.5 text-2xl font-semibold text-[#1c3326]">{job.title}</h3>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-[#4d5750]">
                    {job.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-[#1d241f]">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1c3326]"
                          aria-hidden="true"
                        />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => handleSelectRole(job.title)}
                    className="mt-5 cursor-pointer rounded-[3px] border border-[#dad3c5] px-4 py-2 text-sm font-semibold text-[#1c3326] transition-colors hover:border-[#1c3326] hover:bg-[#efece4]"
                  >
                    Apply for {job.title}
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div
            id="crew-application"
            className="rounded-[4px] border border-[#dad3c5] bg-[#fcfbf8] p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1c3326]">Crew Application</h2>
            <p className="mt-1.5 text-sm text-[#4d5750]">
              Share your experience and contact details. You can also email resumes directly to{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-[#1c3326] underline">
                {COMPANY_INFO.email}
              </a>
              .
            </p>

            {submittedName ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 rounded-[4px] border border-[#b9cbbd] bg-[#eef3ef] p-5 text-[#1c3326]"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-serif text-lg font-semibold">
                      Application Ready for {submittedName}
                    </p>
                    <p className="mt-1.5 text-sm text-[#284635]">
                      Position selected: <strong>{submittedRole}</strong>. Our Little Rock office
                      reviews crew inquiries Monday–Friday, 8am–5pm. You can also follow up by
                      calling{' '}
                      <a href={COMPANY_INFO.phoneHref} className="font-bold underline tabular-nums">
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmittedName(null)}
                      className="mt-4 cursor-pointer rounded-[3px] border border-[#1c3326]/30 px-4 py-2 text-sm font-semibold text-[#1c3326] hover:bg-[#1c3326] hover:text-[#f7f4ee]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label htmlFor="job-role" className="block text-sm font-semibold text-[#1d241f]">
                    Position
                  </label>
                  <select
                    id="job-role"
                    value={form.role}
                    onChange={(e) => {
                      setForm((prev) => ({...prev, role: e.target.value}));
                      if (errors.role) setErrors((prev) => ({...prev, role: undefined}));
                    }}
                    className="mt-1.5 w-full rounded-[3px] border border-[#dad3c5] bg-[#f7f4ee] px-3.5 py-2.5 text-[0.98rem] text-[#1d241f] focus:border-[#1c3326] focus:bg-[#fcfbf8] focus:outline-none"
                  >
                    {JOB_OPENINGS.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.role}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="app-name" className="block text-sm font-semibold text-[#1d241f]">
                    Full Name
                  </label>
                  <input
                    id="app-name"
                    type="text"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={(e) => {
                      setForm((prev) => ({...prev, fullName: e.target.value}));
                      if (errors.fullName) setErrors((prev) => ({...prev, fullName: undefined}));
                    }}
                    className="mt-1.5 w-full rounded-[3px] border border-[#dad3c5] bg-[#f7f4ee] px-3.5 py-2.5 text-[0.98rem] text-[#1d241f] focus:border-[#1c3326] focus:bg-[#fcfbf8] focus:outline-none"
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
                    <label htmlFor="app-phone" className="block text-sm font-semibold text-[#1d241f]">
                      Phone
                    </label>
                    <input
                      id="app-phone"
                      type="tel"
                      placeholder="(501) 555-0199"
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({...prev, phone: e.target.value}));
                        if (errors.phone) setErrors((prev) => ({...prev, phone: undefined}));
                      }}
                      className="mt-1.5 w-full rounded-[3px] border border-[#dad3c5] bg-[#f7f4ee] px-3.5 py-2.5 text-[0.98rem] text-[#1d241f] tabular-nums focus:border-[#1c3326] focus:bg-[#fcfbf8] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="app-email" className="block text-sm font-semibold text-[#1d241f]">
                      Email
                    </label>
                    <input
                      id="app-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({...prev, email: e.target.value}));
                        if (errors.email) setErrors((prev) => ({...prev, email: undefined}));
                      }}
                      className="mt-1.5 w-full rounded-[3px] border border-[#dad3c5] bg-[#f7f4ee] px-3.5 py-2.5 text-[0.98rem] text-[#1d241f] focus:border-[#1c3326] focus:bg-[#fcfbf8] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8b2c1d]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="app-exp" className="block text-sm font-semibold text-[#1d241f]">
                    Tree Care / Equipment / CDL Experience
                  </label>
                  <input
                    id="app-exp"
                    type="text"
                    placeholder="e.g. 3 years climbing & rigging, Class B CDL"
                    value={form.experience}
                    onChange={(e) => setForm((prev) => ({...prev, experience: e.target.value}))}
                    className="mt-1.5 w-full rounded-[3px] border border-[#dad3c5] bg-[#f7f4ee] px-3.5 py-2.5 text-[0.98rem] text-[#1d241f] focus:border-[#1c3326] focus:bg-[#fcfbf8] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-notes" className="block text-sm font-semibold text-[#1d241f]">
                    Additional Notes
                  </label>
                  <textarea
                    id="app-notes"
                    rows={3}
                    placeholder="Tell us about your work background and availability..."
                    value={form.notes}
                    onChange={(e) => setForm((prev) => ({...prev, notes: e.target.value}))}
                    className="mt-1.5 w-full rounded-[3px] border border-[#dad3c5] bg-[#f7f4ee] px-3.5 py-2.5 text-[0.98rem] text-[#1d241f] focus:border-[#1c3326] focus:bg-[#fcfbf8] focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer whitespace-nowrap rounded-[3px] bg-[#1c3326] px-6 py-3 text-sm font-semibold text-[#f7f4ee] transition-colors hover:bg-[#284635]"
                  >
                    Submit Crew Inquiry
                  </button>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c3326] hover:underline"
                  >
                    <Mail className="h-4 w-4 text-[#935b25]" aria-hidden="true" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
