import { notFound } from "next/navigation";
import { SiteChrome } from "../../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../../lib/sanity/client";
import { serviceBySlugQuery, siteSettingsQuery } from "../../../lib/sanity/queries";
import Image from "next/image";

type ServiceDoc = {
  _id: string;
  title: string;
  shortDescription?: string;
  description?: Array<{
    children?: Array<{ text?: string }>;
  }>;
  featuredImage?: unknown;
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [service, siteSettings] = await Promise.all([
    sanityFetch<ServiceDoc>(serviceBySlugQuery, { slug }),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  if (!service) {
    notFound();
  }

  const paragraphs =
    service.description?.map((block) => block.children?.map((child) => child.text ?? "").join("").trim()).filter(Boolean) ?? [];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section section--split">
        <div className="about__imageWrap">
          <Image
            src={
              sanityImageUrl(service.featuredImage) ||
              "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4375.png"
            }
            alt={service.title}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="cover"
          />
        </div>
        <div className="content-block">
          <div className="section__title">{service.title}</div>
          <p className="section__lead">{service.shortDescription}</p>
          {paragraphs.length > 0 ? paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
        </div>
      </section>
    </main>
  );
}
