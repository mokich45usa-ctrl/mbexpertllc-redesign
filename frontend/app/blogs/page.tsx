import Image from "next/image";
import Link from "next/link";
import { SiteChrome } from "../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../lib/sanity/client";
import { blogPostsQuery, siteSettingsQuery } from "../../lib/sanity/queries";

type BlogPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  coverImage?: unknown;
  publishedAt?: string;
  categories?: string[];
};

export default async function BlogsPage() {
  const [posts, siteSettings] = await Promise.all([
    sanityFetch<BlogPost[]>(blogPostsQuery),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  const items = posts?.length
    ? posts
    : [
        {
          _id: "fallback-blog-1",
          title: "How mobile diagnostics save time",
          slug: { current: "how-mobile-diagnostics-save-time" },
          excerpt: "A practical look at why on-site diagnostics often beat a tow-to-shop workflow.",
        },
      ];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section">
        <div className="section__title">Blogs</div>
        <p className="section__lead">Publish new posts in Sanity and they will appear here automatically.</p>
        <div className="divider" />
        <div className="pricing-grid" style={{ marginTop: 24 }}>
          {items.map((post, index) => {
            const imageSrc =
              sanityImageUrl(post.coverImage) ||
              [
                "https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg",
                "https://mbexpertllc.com/wp-content/uploads/2026/03/1188.jpg",
                "https://mbexpertllc.com/wp-content/uploads/2026/03/3940.jpg",
              ][index % 3];
            return (
              <article className="pricing-card" key={post._id}>
                <Image src={imageSrc} alt={post.title} width={1000} height={1070} className="pricing-card__image" />
                <h3>{post.title}</h3>
                <p className="section__lead">{post.excerpt ?? "Blog excerpt can be edited in Studio."}</p>
                {post.slug?.current ? (
                  <Link className="button button--outline pricing-card__link" href={`/blogs/${post.slug.current}`}>
                    Read More
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
