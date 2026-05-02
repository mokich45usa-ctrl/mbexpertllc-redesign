import Image from "next/image";
import { SiteChrome } from "../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../lib/sanity/client";
import { pageBySlugQuery, siteSettingsQuery } from "../../lib/sanity/queries";

type PageDocument = {
  title?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  body?: Array<{
    children?: Array<{ text?: string }>;
  }>;
  heroImage?: unknown;
};

export default async function AboutUsPage() {
  const [page, siteSettings] = await Promise.all([
    sanityFetch<PageDocument>(pageBySlugQuery, { slug: "about-us" }),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  const paragraphs =
    page?.body?.map((block) => block.children?.map((child) => child.text ?? "").join("").trim()).filter(Boolean) ?? [];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section section--split">
        <div className="about__imageWrap">
          <Image
            src={
              sanityImageUrl(page?.heroImage) ||
              "https://mbexpertllc.com/wp-content/uploads/2026/03/1174.jpg"
            }
            alt="MB Expert LLC"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="cover"
          />
        </div>
        <div className="content-block">
          <div className="section__title">{page?.heroTitle ?? "About Us"}</div>
          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <>
              <p>MB EXPERT LLC is a professional Mobile Mechanic service based in Traverse City, serving vehicle owners throughout Northern Michigan.</p>
              <p>We don’t just guess and swap parts; we find the root cause of the problem with dealer-level diagnostics and mobile repair.</p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
