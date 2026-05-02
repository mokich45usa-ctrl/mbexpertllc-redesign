import Image from "next/image";
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
  const featuredServices = home?.featuredServices ?? [
    {
      _id: "diagnostics",
      title: "Advanced Diagnostics",
      shortDescription: "Dealer-level scanning, DTC interpretation, and live data checks.",
    },
    {
      _id: "maintenance",
      title: "Mobile Maintenance",
      shortDescription: "Oil changes, service resets, battery checks, and preventive care.",
    },
    {
      _id: "roadside",
      title: "Roadside Support",
      shortDescription: "On-site help when the car needs attention where it stopped.",
    },
  ];

  const processSteps = home?.processSteps ?? [
    { title: "Choose service", description: "Select the problem or maintenance need." },
    { title: "Book an appointment", description: "We confirm timing and location quickly." },
    { title: "We come to you", description: "The work happens at home, work, or roadside." },
  ];

  const pricingPlans = home?.featuredPlans ?? [
    { _id: "plan-1", title: "Oil Change", price: "$24.99" },
    { _id: "plan-2", title: "Wheel Alignment Special", price: "$20.99" },
    { _id: "plan-3", title: "Roadside Assistance", price: "$20.99" },
  ];

  const faqs = home?.featuredFaqs ?? [
    { _id: "faq-1", question: "How often should I book mobile maintenance?" },
    { _id: "faq-2", question: "Do I need towing for diagnostic service?" },
    { _id: "faq-3", question: "Can you help at my workplace?" },
  ];

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="logo-mark">
          <div className="logo-dot" />
          <div>
            <strong>MB Expert LLC</strong>
            <span>Mobile Mechanic + Locksmith</span>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-primary header-cta" href={home?.primaryCtaHref ?? "/contact"}>
          {home?.primaryCtaLabel ?? "Schedule Service"}
        </a>
      </header>

      <section className="hero">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>
            {home?.heroDescription ??
              settings?.tagline ??
              "Mobile service that comes to your home, workplace, or roadside with a calmer, cleaner presentation and clearer calls to action."}
          </p>
          <div className="actions">
            <a className="button button-primary" href={home?.primaryCtaHref ?? "/contact"}>
              {home?.primaryCtaLabel ?? "Schedule Service"}
            </a>
            <a className="button button-secondary" href={home?.secondaryCtaHref ?? "/services"}>
              {home?.secondaryCtaLabel ?? "View Services"}
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-media">
            <Image
              src="https://mbexpertllc.com/wp-content/uploads/2026/03/image-removebg-preview-e1775584985293.png"
              alt="MB Expert LLC logo"
              width={483}
              height={283}
              className="hero-logo"
              priority
            />
          </div>
          <div className="hero-panel-grid">
            <div className="info-chip">
              <span>Call</span>
              <strong>{settings?.primaryPhone ?? "231-392-6204"}</strong>
            </div>
            <div className="info-chip">
              <span>Area</span>
              <strong>{settings?.serviceArea ?? "Northern Michigan"}</strong>
            </div>
            <div className="info-chip">
              <span>Hours</span>
              <strong>{settings?.hours ?? "8:00am-10:00pm"}</strong>
            </div>
            <div className="info-chip">
              <span>Email</span>
              <strong>{settings?.primaryEmail ?? "mbexpertllc@gmail.com"}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="stat">
          <strong>24/7</strong>
          <span>availability style window</span>
        </div>
        <div className="stat">
          <strong>Mobile</strong>
          <span>service at your location</span>
        </div>
        <div className="stat">
          <strong>Dealer</strong>
          <span>level diagnostics approach</span>
        </div>
        <div className="stat">
          <strong>Local</strong>
          <span>Northern Michigan focus</span>
        </div>
      </section>

      <section className="section-block" id="services">
        <div className="section-head">
          <div>
            <span className="eyebrow">Services</span>
            <h2 className="section-title">A cleaner service architecture with fewer distractions.</h2>
          </div>
          <p className="section-copy">
            The current site has useful content, but the layout is doing too much. This version makes the services feel more premium and easier to scan.
          </p>
        </div>
        <div className="card-grid">
          {featuredServices.slice(0, 3).map((service) => (
            <article className="card" key={service._id}>
              <h3>{service.title}</h3>
              <p className="section-copy">{service.shortDescription}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="process">
        <div className="section-head">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">Three simple steps to get the job moving.</h2>
          </div>
        </div>
        <div className="card-grid">
          {processSteps.map((step, index) => (
            <article className="card" key={`${step.title}-${index}`}>
              <div className="step-index">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p className="section-copy">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="pricing">
        <div className="section-head">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 className="section-title">Simple pricing cards instead of a cluttered sales block.</h2>
          </div>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className="pricing-card" key={plan._id}>
              <span className="pricing-price">{plan.price}</span>
              <h3>{plan.title}</h3>
              <p className="section-copy">
                {home?.contactNote ?? "Clean, conversion-focused presentation with room for Sanity data later."}
              </p>
              <a className="button button-secondary" href={home?.primaryCtaHref ?? "/contact"}>
                Book now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="faq">
        <div className="section-head">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Questions clients usually need answered fast.</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq._id}>
              <summary>{faq.question}</summary>
              <p className="section-copy">
                {home?.contactNote ??
                  "This answer can be written in Sanity once the content model is connected."}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
