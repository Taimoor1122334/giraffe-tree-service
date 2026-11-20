import {useState} from 'react';
import {ArrowRight} from 'lucide-react';
import {ResilientImage} from '../components/ResilientImage';
import {BLOG_POSTS} from '../data/treeServiceData';
import {useRouter} from '../router/RouterContext';

const CATEGORIES = ['All Topics', 'Structural Care', 'Tree Health', 'Storm Safety', 'Property Maintenance'];

export function BlogPage() {
  const {navigate} = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  const visiblePosts =
    selectedCategory === 'All Topics'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div>
      {/* Editorial Page Header */}
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
            <span className="font-semibold text-[#145c3e]">Blog</span>
          </nav>

          <div className="mt-5 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-[clamp(2rem,3.2vw,2.75rem)] font-bold leading-tight text-[#145c3e]">
                Practical Tree Care Advice for Central Arkansas
              </h1>
            </div>
            <p className="text-[1.02rem] leading-relaxed text-[#4a5a52]">
              Plain-spoken notes from our Little Rock crews on storm preparation, mature oak
              pruning, cabling decisions, and lot clearing without harming keeper trees.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Posts */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d5ddd8] pb-6">
            <div
              className="flex flex-wrap gap-1.5 rounded-md border border-[#d5ddd8] bg-[#eef3f0] p-1"
              role="group"
              aria-label="Filter articles by topic"
            >
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-[#145c3e] text-[#ffffff]'
                        : 'text-[#4a5a52] hover:bg-[#ffffff] hover:text-[#145c3e]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-[#4a5a52] tabular-nums">
              {visiblePosts.length} {visiblePosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {visiblePosts.map((post) => {
              const href = `/blog/${post.slug}`;
              return (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-[6px] border border-[#d5ddd8] bg-[#ffffff]"
                >
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(href);
                    }}
                    className="group aspect-[16/10] w-full overflow-hidden bg-[#eef3f0]"
                  >
                    <ResilientImage
                      src={post.image}
                      alt={post.imageAlt}
                      fallbackTitle={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <p className="text-xs font-medium text-[#4a5a52]">
                        <span className="font-semibold text-[#14663f]">{post.category}</span>
                        <span className="mx-2" aria-hidden="true">
                          ·
                        </span>
                        <span>{post.publishedDate}</span>
                        <span className="mx-2" aria-hidden="true">
                          ·
                        </span>
                        <span>{post.readTime}</span>
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold text-[#145c3e]">
                        <a
                          href={href}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(href);
                          }}
                          className="hover:underline hover:underline-offset-4"
                        >
                          {post.title}
                        </a>
                      </h2>

                      <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4a5a52]">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#d5ddd8] pt-4">
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(href);
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145c3e] hover:underline hover:underline-offset-4"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
