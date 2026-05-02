import Image from "next/image";

const plans = [
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

export default function PricingPage() {
  return (
    <main className="site">
      <div className="topbar">
        <div className="topbar__item">8:00am- 10:00pm (All Days)</div>
        <a className="topbar__item" href="tel:231-392-6204">
          Call Now/Text 231-392-6204
        </a>
        <div className="topbar__item">Northern Michigan</div>
      </div>
      <header className="header">
        <a className="brand" href="/">
          <Image src="https://mbexpertllc.com/wp-content/uploads/2026/03/image-removebg-preview-e1775584985293.png" alt="MB Expert LLC" width={483} height={283} className="brand__logo" />
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
      <section className="section">
        <div className="section__title">Our Pricing Plans</div>
        <p className="section__lead">Fixed price car servicing packages</p>
        <div className="divider" />
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className="pricing-card" key={plan.title}>
              <h3>{plan.title}</h3>
              <div className="pricing-card__price">{plan.price}</div>
              <Image src={plan.image} alt="" width={374} height={233} className="pricing-card__image" />
              <a className="button button--outline pricing-card__link" href="/contact-us">
                More Info
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
