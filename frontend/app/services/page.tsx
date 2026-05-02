import Image from "next/image";
import { SiteChrome } from "../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../lib/sanity/client";
import { servicesQuery, siteSettingsQuery } from "../../lib/sanity/queries";

type ServiceItem = {
  _id: string;
  title: string;
  shortDescription?: string;
  featuredImage?: unknown;
  featured?: boolean;
  sortOrder?: number;
};

export default async function ServicesPage() {
  const [services, siteSettings] = await Promise.all([
    sanityFetch<ServiceItem[]>(servicesQuery),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  const fallbackImages = [
    "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4375.png",
    "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4376-1.png",
    "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4377.png",
  ];

  const items = (services?.length
    ? services
    : [
        {
          _id: "fallback-1",
          title: "Comprehensive System Scanning",
          shortDescription:
            "A complete health check of all vehicle control modules to ensure every system is communicating correctly.",
          featuredImage: null,
        },
      ]) satisfies ServiceItem[];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section">
        <div className="section__title">Services</div>
        <p className="section__lead">New service cards added in Sanity will appear here automatically.</p>
        <div className="divider" />
        <div className="service-grid" style={{ marginTop: 24 }}>
          {items.map((service, index) => {
            const imageSrc = sanityImageUrl(service.featuredImage) || fallbackImages[index % fallbackImages.length];
            return (
              <article className="service-card" key={service._id}>
                <Image src={imageSrc} alt={service.title} width={246} height={246} className="service-card__image" />
                <h3>{service.title}</h3>
                <p>{service.shortDescription ?? "Service details can be edited in the Studio."}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
