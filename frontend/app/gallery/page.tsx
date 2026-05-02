import Image from "next/image";
import { SiteChrome } from "../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../lib/sanity/client";
import { galleryItemsQuery, siteSettingsQuery } from "../../lib/sanity/queries";

type GalleryItem = {
  _id: string;
  title: string;
  image?: unknown;
  alt?: string;
  category?: string;
};

export default async function GalleryPage() {
  const [items, siteSettings] = await Promise.all([
    sanityFetch<GalleryItem[]>(galleryItemsQuery),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  const fallbackImages = [
    "https://mbexpertllc.com/wp-content/uploads/2026/03/2149891383.jpg",
    "https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg",
    "https://mbexpertllc.com/wp-content/uploads/2026/03/1188.jpg",
    "https://mbexpertllc.com/wp-content/uploads/2026/03/3940.jpg",
  ];

  const gallery = items?.length
    ? items
    : [
        { _id: "fallback-gallery-1", title: "Shop work", alt: "Shop work" },
        { _id: "fallback-gallery-2", title: "Diagnostic service", alt: "Diagnostic service" },
      ];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section">
        <div className="section__title">Gallery</div>
        <p className="section__lead">Upload new gallery images in Sanity and they will show up here automatically.</p>
        <div className="divider" />
        <div className="service-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: 24 }}>
          {gallery.map((item, index) => {
            const imageSrc =
              sanityImageUrl(item.image) || fallbackImages[index % fallbackImages.length];
            return (
              <figure key={item._id} style={{ margin: 0 }}>
                <Image
                  src={imageSrc}
                  alt={item.alt ?? item.title}
                  width={1500}
                  height={1000}
                  className="service-card__image"
                  style={{ aspectRatio: "1.2 / 1", objectFit: "cover" }}
                />
                <figcaption className="section__lead" style={{ marginTop: 8 }}>
                  {item.title}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}
