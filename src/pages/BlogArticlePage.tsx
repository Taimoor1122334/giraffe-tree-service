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
      <section className="border-b border-[#d5ddd8] bg-[#eef3f0] py-12 lg:py-16">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
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
            <a
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                navigate('/blog');
              }}
              className="hover:text-[#145c3e] hover:underline"
            >
              Blog
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-semibold text-[#145c3e]">{article.category}</span>
          </nav>

          <p className="mt-6 text-xs font-medium text-[#4a5a52]">
            <span className="font-semibold text-[#14663f]">{article.category}</span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span>{article.publishedDate}</span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span>{article.readTime}</span>
          </p>

          <h1 className="mt-3 text-[clamp(2rem,3.6vw,2.9rem)] font-semibold leading-tight text-[#145c3e]">
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#4a5a52]">{article.summary}</p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[6px] bg-[#eef3f0]">
            <ResilientImage
              src={article.image}
              alt={article.imageAlt}
              fallbackTitle={article.title}
              loading="eager"
            />
          </div>

          <div className="mt-10 space-y-5 text-[1.08rem] leading-[1.75] text-[#1b2e24]">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-md border border-[#d5ddd8] bg-[#ffffff] p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[#145c3e]">Key Field Takeaways</h2>
            <ul className="mt-4 space-y-2.5">
              {article.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.98rem] text-[#1b2e24]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#145c3e]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedService && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-md border border-[#d5ddd8] bg-[#eef3f0] p-6 sm:p-8">
              <div className="max-w-lg">
                <p className="text-xs font-semibold text-[#14663f]">
                  Related Service
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-[#145c3e]">
                  {relatedService.title}
                </h3>
                <p className="mt-2 text-sm text-[#4a5a52]">{relatedService.shortDescription}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`/services/${relatedService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/services/${relatedService.slug}`);
                  }}
                  className="whitespace-nowrap rounded-md bg-[#145c3e] px-5 py-2.5 text-sm font-semibold text-[#ffffff] hover:bg-[#14663f]"
                >
                  View {relatedService.title}
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[#d5ddd8] bg-[#ffffff] px-4 py-2.5 text-sm font-semibold text-[#145c3e] tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#14663f]" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          )}

          {/* More Articles */}
          <div className="mt-14 border-t border-[#d5ddd8] pt-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#145c3e]">More Field Notes</h2>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/blog');
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145c3e] hover:underline"
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
                  className="block rounded-md border border-[#d5ddd8] bg-[#ffffff] p-5 transition-colors hover:border-[#145c3e]"
                >
                  <p className="text-xs font-medium text-[#14663f]">
                    {other.category} · {other.readTime}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-[#145c3e]">{other.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#145c3e]">
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
