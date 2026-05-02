import type { CSSProperties } from "react";
import Image from "next/image";
import { sanityFetch } from "../lib/sanity/client";
import { homePageQuery, siteSettingsQuery } from "../lib/sanity/queries";

type HomePageContent = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustPoints?: string[];
  aboutTitle?: string;
  aboutBody?: Array<{
    _type?: string;
    children?: Array<{ text?: string }>;
  }>;
  featuredServices?: Array<{
    _id: string;
    title: string;
    shortDescription?: string;
  }>;
  processSteps?: Array<{
    title: string;
    description?: string;
  }>;
  featuredTestimonials?: Array<{
    _id: string;
    name: string;
    role?: string;
    quote: string;
    rating?: number;
  }>;
  featuredFaqs?: Array<{
    _id: string;
    question: string;
    answer?: Array<{
      children?: Array<{ text?: string }>;
    }>;
  }>;
  featuredPlans?: Array<{
    _id: string;
    title: string;
    price: string;
    summary?: string;
    features?: string[];
    featured?: boolean;
  }>;
  contactNote?: string;
};

type SiteSettings = {
  companyName?: string;
  tagline?: string;
  primaryPhone?: string;
  primaryEmail?: string;
  serviceArea?: string;
  hours?: string;
  accentColor?: string;
};

const fallbackServices = [
  {
    title: "Comprehensive System Scanning",
    description:
      "A complete health check of all vehicle control modules to ensure every system is communicating correctly.",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4375.png",
  },
  {
    title: "DTC Analysis & Interpretation",
    description:
      "Expert reading and interpretation of active and stored Diagnostic Trouble Codes (DTCs).",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4376-1.png",
  },
  {
    title: "Live Data Stream Monitoring",
    description:
      "Real-time analysis of engine and sensor performance data to identify intermittent faults.",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4377.png",
  },
  {
    title: "Service Light Reset",
    description:
      'Professional clearing of "Check Engine," "Service Engine Soon," and other dashboard maintenance indicators.',
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4375.png",
  },
  {
    title: "Electronic Health Reports",
    description:
      "A detailed overview of your vehicle’s electronic ecosystem and communication status.",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4376-1.png",
  },
  {
    title: "Advanced Performance Testing",
    description:
      "On-site compression and vacuum testing to evaluate engine efficiency and management systems.",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4377.png",
  },
];

const fallbackProcessSteps = [
  {
    title: "Choose Your Service",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4375.png",
  },
  {
    title: "Make an APPOINTMENT",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4376-1.png",
  },
  {
    title: "We’ll take YOUR CAR for repair",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4377.png",
  },
];

const fallbackTestimonials = [
  {
    name: "John Smith",
    role: "Marketing Head",
    quote:
      "Steve did a good job. You was one of the nicest mechanic I’ve ever worked with in the past 10 years. Big thank you. Hi I am very happy with their service. I just want to say thank you for looking after my car and Resolve my problems.",
  },
  {
    name: "John Smith",
    role: "Marketing Head",
    quote:
      "Steve did a good job. You was one of the nicest mechanic I’ve ever worked with in the past 10 years. Big thank you. Hi I am very happy with their service. I just want to say thank you for looking after my car and Resolve my problems.",
  },
  {
    name: "John Smith",
    role: "Marketing Head",
    quote:
      "Steve did a good job. You was one of the nicest mechanic I’ve ever worked with in the past 10 years. Big thank you. Hi I am very happy with their service. I just want to say thank you for looking after my car and Resolve my problems.",
  },
];

const fallbackFaqs = [
  "How often should I book a mobile oil change service?",
  "Do I need regular servicing for my leased vehicle with a mobile mechanic?",
  "Should I call a mobile mechanic to check or charge my battery?",
  "When should I book a mobile brake inspection or replacement service?",
];

const fallbackPricingPlans = [
  {
    title: "Wheel Alignment Special",
    price: "$20.99",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/pricing-box02_img02.png.png",
  },
  {
    title: "Synthetic Oil Change",
    price: "$24.99",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/pricing-box02_img01.png.png",
  },
  {
    title: "Roadside Assistance",
    price: "$20.99",
    image: "https://mbexpertllc.com/wp-content/uploads/2026/03/pricing-box02_img02.png.png",
  },
];

function blocksToParagraphs(
  blocks?: Array<{
    children?: Array<{ text?: string }>;
  }>
) {
  const paragraphs = blocks
    ?.map((block) => block.children?.map((child) => child.text ?? "").join("").trim())
    .filter((paragraph): paragraph is string => Boolean(paragraph)) ?? [];

  return paragraphs.length > 0
    ? paragraphs
    : [
        "MB EXPERT LLC is a professional Mobile Mechanic service based in Traverse City, serving vehicle owners throughout Northern Michigan.",
        "We arrive fully equipped with advanced diagnostic tools so problems can be solved on the spot without towing the vehicle.",
      ];
}

export default async function HomePage() {
  const [homePage, siteSettings] = await Promise.all([
    sanityFetch<HomePageContent>(homePageQuery),
    sanityFetch<SiteSettings>(siteSettingsQuery),
  ]);

  const services = (homePage?.featuredServices?.length
    ? homePage.featuredServices.map((service, index) => ({
        title: service.title,
        description: service.shortDescription ?? fallbackServices[index % fallbackServices.length].description,
        image: fallbackServices[index % fallbackServices.length].image,
      }))
    : fallbackServices);

  const processSteps = homePage?.processSteps?.length
    ? homePage.processSteps.map((step, index) => ({
        title: step.title,
        image: fallbackProcessSteps[index % fallbackProcessSteps.length].image,
        description: step.description ?? "",
      }))
    : fallbackProcessSteps.map((step) => ({ ...step, description: "" }));

  const testimonials = (homePage?.featuredTestimonials?.length
    ? homePage.featuredTestimonials.map((item, index) => ({
        name: item.name,
        role: item.role ?? fallbackTestimonials[index % fallbackTestimonials.length].role,
        quote: item.quote,
      }))
    : fallbackTestimonials);

  const faqs = (homePage?.featuredFaqs?.length
    ? homePage.featuredFaqs.map((item) => ({
        question: item.question,
        answer:
          item.answer?.map((block) => block.children?.map((child) => child.text ?? "").join("")).join(" ") ??
          "Additional details are available in the Studio.",
      }))
    : fallbackFaqs.map((question) => ({
        question,
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur.",
      })));

  const pricingPlans = (homePage?.featuredPlans?.length
    ? homePage.featuredPlans.map((plan, index) => ({
        title: plan.title,
        price: plan.price,
        image: fallbackPricingPlans[index % fallbackPricingPlans.length].image,
      }))
    : fallbackPricingPlans);

  const aboutParagraphs = blocksToParagraphs(homePage?.aboutBody);
  const heroEyebrow = homePage?.heroEyebrow ?? siteSettings?.companyName ?? "MB EXPERT LLC";
  const heroTitle = homePage?.heroTitle ?? "Professional Mobile Mechanic and Locksmith Service";
  const heroDescription =
    homePage?.heroDescription ?? "We bring diagnostics, repair, and lockout support directly to your location in Northern Michigan.";
  const primaryCtaLabel = homePage?.primaryCtaLabel ?? "SCHEDULE SERVICE";
  const primaryCtaHref = homePage?.primaryCtaHref ?? "/contact-us";
  const secondaryCtaLabel = homePage?.secondaryCtaLabel ?? "VIEW SERVICES";
  const secondaryCtaHref = homePage?.secondaryCtaHref ?? "/services";
  const topbarHours = siteSettings?.hours ?? "8:00am- 10:00pm (All Days)";
  const topbarPhone = siteSettings?.primaryPhone ?? "231-392-6204";
  const topbarArea = siteSettings?.serviceArea ?? "Northern Michigan";
  const companyEmail = siteSettings?.primaryEmail ?? "mbexpertllc@gmail.com";

  return (
    <main className="site">
      <div className="topbar">
        <div className="topbar__item">{topbarHours}</div>
        <a className="topbar__item" href={`tel:${topbarPhone}`}>
          Call Now/Text {topbarPhone}
        </a>
        <div className="topbar__item">{topbarArea}</div>
      </div>

      <header className="header">
        <a className="brand" href="/">
          <Image
            src="https://mbexpertllc.com/wp-content/uploads/2026/03/image-removebg-preview-e1775584985293.png"
            alt="MB Expert LLC"
            width={483}
            height={283}
            className="brand__logo"
            priority
          />
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/services">Services</a>
          <a href="/blogs">Blogs</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact-us">Contact Us</a>
        </nav>

        <a className="button button--solid header__cta" href="/contact-us">
          Appointment
        </a>
      </header>

      <section
        className="hero"
        style={
          {
            ["--hero-image" as string]:
              'url("https://mbexpertllc.com/wp-content/uploads/2026/03/muscular-car-service-worker-repairing-vehicle-scaled.jpg")',
          } as CSSProperties
        }
      >
        <div className="hero__content">
          <div className="hero__eyebrow">{heroEyebrow}</div>
          <h1>{heroTitle}</h1>
          <p className="hero__description">{heroDescription}</p>
          <div className="hero__actions">
            <a className="button button--solid" href={primaryCtaHref}>
              {primaryCtaLabel}
            </a>
            <a className="button button--outline" href={secondaryCtaHref}>
              {secondaryCtaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="estimate section">
        <div className="section__title">Get a Free Estimate</div>
        <form className="estimate__form">
          <input placeholder="ZIP Code" />
          <input placeholder="Year" />
          <input placeholder="Make" />
          <input placeholder="Model" />
          <input placeholder="Sub Model" />
          <input placeholder="Engine" />
          <input placeholder="VIN Code" />
          <textarea placeholder="Describe your issue" rows={4} />
          <button type="button" className="button button--solid estimate__submit">
            Request An Estimate
          </button>
        </form>
      </section>

      <section className="about section section--split">
        <div className="about__imageWrap">
          <Image
            src="https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg"
            alt="About MB Expert LLC"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="cover"
          />
        </div>
        <div className="content-block">
          <div className="section__title">{homePage?.aboutTitle ?? "About Us"}</div>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="button button--outline" href="/about-us">
            More About Us
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section__title">Our Services</div>
        <p className="section__lead">We offer full service auto repair &amp; maintenance &amp; Locksmith</p>
        <div className="divider" />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <Image src={service.image} alt="" width={246} height={246} className="service-card__image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/services" className="service-card__link">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__title">How It Works</div>
        <p className="section__lead">These few steps will help return your car to a working condition.</p>
        <div className="divider" />
        <div className="steps-grid">
          {processSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <Image src={step.image} alt="" width={246} height={246} className="step-card__image" />
              <h3>
                <a href="/contact-us">{step.title}</a>
              </h3>
              <p>{step.description}</p>
              <span className="step-card__index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="testimonial-strip">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.quote}>
              <p className="testimonial-card__quote">{item.quote}</p>
              <div className="testimonial-card__meta">
                <Image
                  src="https://mbexpertllc.com/wp-content/uploads/2026/03/testimonials02_img02.jpg.png"
                  alt={item.name}
                  width={90}
                  height={90}
                  className="testimonial-card__avatar"
                />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq">
        <div className="section__title">Frequently Asked Questions</div>
        <div className="faq-list">
          {faqs.map((question) => (
            <details className="faq-item" key={question.question}>
              <summary>{question.question}</summary>
              <p>{question.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section pricing">
        <div className="section__title">Our Pricing Plans</div>
        <p className="section__lead">Fixed price car servicing packages</p>
        <div className="divider" />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className="pricing-card" key={plan.title}>
              <h3>{plan.title}</h3>
              <div className="pricing-card__price">{plan.price}</div>
              <Image src={plan.image} alt="" width={374} height={233} className="pricing-card__image" />
              <a className="button button--outline pricing-card__link" href="/pricing">
                More Info
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__cols">
          <div>
            <div className="section__title">Contact Info</div>
            <ul className="footer__list">
              <li>{topbarArea}</li>
              <li>
                <a href={`tel:${topbarPhone}`}>{topbarPhone}</a>
              </li>
              <li>
                <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
              </li>
            </ul>
            <div className="section__title footer__title">Opening Hours</div>
            <ul className="footer__list">
              <li>{topbarHours}</li>
            </ul>
          </div>
          <div className="footer__gallery">
            <Image
              src="https://mbexpertllc.com/wp-content/uploads/2026/03/2149891383.jpg"
              alt=""
              width={1500}
              height={1000}
              className="footer__img"
            />
            <Image
              src="https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg"
              alt=""
              width={1000}
              height={1070}
              className="footer__img"
            />
          </div>
        </div>
        <div className="footer__bottom">Copyright © 2026 | MB Experts LLC | All rights reserved</div>
      </footer>
    </main>
  );
}
