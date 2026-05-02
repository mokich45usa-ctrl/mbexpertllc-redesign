import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../../lib/sanity/client";
import { blogPostBySlugQuery, siteSettingsQuery } from "../../../lib/sanity/queries";

type BlogDoc = {
  _id: string;
  title: string;
  excerpt?: string;
  body?: Array<{
    children?: Array<{ text?: string }>;
  }>;
  coverImage?: unknown;
};

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, siteSettings] = await Promise.all([
    sanityFetch<BlogDoc>(blogPostBySlugQuery, { slug }),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  if (!post) {
    notFound();
  }

  const paragraphs =
    post.body?.map((block) => block.children?.map((child) => child.text ?? "").join("").trim()).filter(Boolean) ?? [];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section section--split">
        <div className="about__imageWrap">
          <Image
            src={sanityImageUrl(post.coverImage) || "https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg"}
            alt={post.title}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="cover"
          />
        </div>
        <div className="content-block">
          <div className="section__title">{post.title}</div>
          <p className="section__lead">{post.excerpt}</p>
          {paragraphs.length > 0 ? paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
        </div>
      </section>
    </main>
  );
}
