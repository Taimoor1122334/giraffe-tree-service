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
            <span className="font-semibold text-[#1c3326]">Blog</span>
          </nav>

          <div className="mt-5 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-semibold tracking-wide text-[#935b25]">
                <span>Field Notes &amp; Tree Care Guides</span>
              </div>
              <h1 className="mt-3.5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-[#1c3326]">
                Practical Tree Care Advice for Central Arkansas
              </h1>
            </div>
            <p className="text-[1.02rem] leading-relaxed text-[#4d5750]">
              Plain-spoken notes from our Little Rock crews on storm preparation, mature oak
              pruning, cabling decisions, and lot clearing without harming keeper trees.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Posts */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dad3c5] pb-6">
            <div
              className="flex flex-wrap gap-1.5 rounded-[4px] border border-[#dad3c5] bg-[#efece4] p-1"
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
                    className={`cursor-pointer rounded-[3px] px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-[#1c3326] text-[#f7f4ee]'
                        : 'text-[#4d5750] hover:bg-[#fcfbf8] hover:text-[#1c3326]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-[#4d5750] tabular-nums">
              {visiblePosts.length} {visiblePosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {visiblePosts.map((post) => {
              const href = `/blog/${post.slug}`;
              return (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-[6px] border border-[#dad3c5] bg-[#fcfbf8]"
                >
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(href);
                    }}
                    className="group aspect-[16/10] w-full overflow-hidden bg-[#efece4]"
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
                      <p className="text-xs font-medium text-[#4d5750]">
                        <span className="font-semibold text-[#935b25]">{post.category}</span>
                        <span className="mx-2" aria-hidden="true">
                          ·
                        </span>
                        <span>{post.publishedDate}</span>
                        <span className="mx-2" aria-hidden="true">
                          ·
                        </span>
                        <span>{post.readTime}</span>
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold text-[#1c3326]">
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

                      <p className="mt-3 text-[0.98rem] leading-relaxed text-[#4d5750]">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#dad3c5] pt-4">
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(href);
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c3326] hover:underline hover:underline-offset-4"
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
