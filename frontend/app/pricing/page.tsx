import Image from "next/image";
import { SiteChrome } from "../../components/site-chrome";
import { sanityFetch, sanityImageUrl } from "../../lib/sanity/client";
import { pricingPlansQuery, siteSettingsQuery } from "../../lib/sanity/queries";

type PricingPlan = {
  _id: string;
  title: string;
  price: string;
  summary?: string;
  features?: string[];
  featured?: boolean;
  ctaLabel?: string;
};

export default async function PricingPage() {
  const [plans, siteSettings] = await Promise.all([
    sanityFetch<PricingPlan[]>(pricingPlansQuery),
    sanityFetch<{ companyName?: string; primaryPhone?: string; serviceArea?: string }>(siteSettingsQuery),
  ]);

  const fallbackImages = [
    "https://mbexpertllc.com/wp-content/uploads/2026/03/pricing-box02_img02.png.png",
    "https://mbexpertllc.com/wp-content/uploads/2026/03/pricing-box02_img01.png.png",
  ];

  const items = plans?.length
    ? plans
    : [
        {
          _id: "fallback-plan-1",
          title: "Wheel Alignment Special",
          price: "$20.99",
          summary: "A simple maintenance package for alignment checks and steering feel.",
        },
        {
          _id: "fallback-plan-2",
          title: "Synthetic Oil Change",
          price: "$24.99",
          summary: "Mobile oil service performed on site with the convenience of driveway or workplace service.",
        },
      ];

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section">
        <div className="section__title">Our Pricing Plans</div>
        <p className="section__lead">Add new pricing cards in Sanity and they will appear here automatically.</p>
        <div className="divider" />
        <div className="pricing-grid">
          {items.map((plan, index) => (
            <article className="pricing-card" key={plan._id}>
              <h3>{plan.title}</h3>
              <div className="pricing-card__price">{plan.price}</div>
              <p className="section__lead">{plan.summary ?? "Plan summary can be edited in Studio."}</p>
              <Image
                src={fallbackImages[index % fallbackImages.length]}
                alt={plan.title}
                width={374}
                height={233}
                className="pricing-card__image"
              />
              <ul className="footer__list" style={{ marginTop: 12 }}>
                {(plan.features ?? []).slice(0, 3).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button--outline pricing-card__link" href="/contact-us">
                {plan.ctaLabel ?? "More Info"}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
