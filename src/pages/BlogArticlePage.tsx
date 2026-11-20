import {ArrowLeft, ArrowRight, Check, Phone} from 'lucide-react';
import {ResilientImage} from '../components/ResilientImage';
import {
  BLOG_POSTS,
  COMPANY_INFO,
  getServiceBySlug,
  type BlogArticle,
} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

interface BlogArticlePageProps {
  article: BlogArticle;
}

export function BlogArticlePage({article}: BlogArticlePageProps) {
  const {navigate} = useRouter();
  const relatedService = getServiceBySlug(article.relatedServiceSlug);
  const otherArticles = BLOG_POSTS.filter((p) => p.slug !== article.slug).slice(0, 2);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#dad3c5] bg-[#efece4] py-12 lg:py-16">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
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
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                navigate('/blog');
              }}
              className="hover:text-[#1c3326] hover:underline"
            >
              Blog
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-semibold text-[#1c3326]">{article.category}</span>
          </nav>

          <p className="mt-6 text-xs font-medium text-[#4d5750]">
            <span className="font-semibold text-[#935b25]">{article.category}</span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span>{article.publishedDate}</span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span>{article.readTime}</span>
          </p>

          <h1 className="mt-3 text-[clamp(2rem,3.6vw,2.9rem)] font-semibold leading-tight text-[#1c3326]">
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#4d5750]">{article.summary}</p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[6px] bg-[#efece4]">
            <ResilientImage
              src={article.image}
              alt={article.imageAlt}
              fallbackTitle={article.title}
              loading="eager"
            />
          </div>

          <div className="mt-10 space-y-5 text-[1.08rem] leading-[1.75] text-[#1d241f]">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-[4px] border border-[#dad3c5] bg-[#fcfbf8] p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[#1c3326]">Key Field Takeaways</h2>
            <ul className="mt-4 space-y-2.5">
              {article.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.98rem] text-[#1d241f]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#1c3326]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedService && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-[4px] border border-[#dad3c5] bg-[#efece4] p-6 sm:p-8">
              <div className="max-w-lg">
                <p className="text-xs font-semibold tracking-wide text-[#935b25]">
                  Related Service
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-[#1c3326]">
                  {relatedService.title}
                </h3>
                <p className="mt-2 text-sm text-[#4d5750]">{relatedService.shortDescription}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`/services/${relatedService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/services/${relatedService.slug}`);
                  }}
                  className="whitespace-nowrap rounded-[3px] bg-[#1c3326] px-5 py-2.5 text-sm font-semibold text-[#f7f4ee] hover:bg-[#284635]"
                >
                  View {relatedService.title}
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-[#dad3c5] bg-[#fcfbf8] px-4 py-2.5 text-sm font-semibold text-[#1c3326] tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#935b25]" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          )}

          {/* More Articles */}
          <div className="mt-14 border-t border-[#dad3c5] pt-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#1c3326]">More Field Notes</h2>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/blog');
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c3326] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>All Articles</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherArticles.map((other) => (
                <a
                  key={other.id}
                  href={`/blog/${other.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/blog/${other.slug}`);
                  }}
                  className="block rounded-[4px] border border-[#dad3c5] bg-[#fcfbf8] p-5 transition-colors hover:border-[#1c3326]"
                >
                  <p className="text-xs font-medium text-[#935b25]">
                    {other.category} · {other.readTime}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-[#1c3326]">{other.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1c3326]">
                    Read Article <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
