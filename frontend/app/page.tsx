import { sanityFetch } from "../lib/sanity/client";
import { homePageQuery, siteSettingsQuery } from "../lib/sanity/queries";

type HomePage = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustPoints?: string[];
  aboutTitle?: string;
  contactNote?: string;
  featuredServices?: Array<{
    _id: string;
    title?: string;
    shortDescription?: string;
  }>;
  processSteps?: Array<{
    title?: string;
    description?: string;
  }>;
  featuredTestimonials?: Array<{
    _id: string;
    name?: string;
    quote?: string;
  }>;
  featuredFaqs?: Array<{
    _id: string;
    question?: string;
  }>;
  featuredPlans?: Array<{
    _id: string;
    title?: string;
    price?: string;
  }>;
};

type SiteSettings = {
  companyName?: string;
  tagline?: string;
  primaryPhone?: string;
  serviceArea?: string;
};

export default async function HomePage() {
  const [home, settings] = await Promise.all([
    sanityFetch<HomePage>(homePageQuery),
    sanityFetch<SiteSettings>(siteSettingsQuery),
  ]);

  const title = home?.heroTitle ?? "Professional Mobile Mechanic and Locksmith Service";
  const eyebrow = home?.heroEyebrow ?? settings?.companyName ?? "MB Expert LLC";

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{home?.heroDescription ?? settings?.tagline ?? "Mobile service that comes to your home, workplace, or roadside."}</p>
          <div className="actions">
            <a className="button button-primary" href={home?.primaryCtaHref ?? "/contact"}>
              {home?.primaryCtaLabel ?? "Schedule Service"}
            </a>
            <a className="button button-secondary" href={home?.secondaryCtaHref ?? "/services"}>
              {home?.secondaryCtaLabel ?? "View Services"}
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Quick contact</h3>
          <p className="section-copy">
            {settings?.primaryPhone ?? "231-392-6204"}
            <br />
            {settings?.serviceArea ?? "Northern Michigan"}
          </p>
          <p className="section-copy">
            {home?.contactNote ?? "We will turn the current site into a cleaner, premium, conversion-focused version."}
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 0" }}>
        <h2 className="section-title">Featured services</h2>
        <p className="section-copy">A tighter, more readable version of the current services structure.</p>
        <div className="card-grid">
          {(home?.featuredServices ?? []).slice(0, 3).map((service) => (
            <article className="card" key={service._id}>
              <h3>{service.title}</h3>
              <p className="section-copy">{service.shortDescription}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
