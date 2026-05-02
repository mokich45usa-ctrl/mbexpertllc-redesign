import Image from "next/image";

export default function ContactUsPage() {
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
      <section className="section section--split">
        <div className="content-block">
          <div className="section__title">Contact Info</div>
          <ul className="footer__list">
            <li>Northern Michigan</li>
            <li>
              <a href="tel:231-392-6204">231-392-6204</a>
            </li>
            <li>
              <a href="mailto:mbexpertllc@gmail.com">mbexpertllc@gmail.com</a>
            </li>
          </ul>
          <div className="section__title footer__title">Opening Hours</div>
          <ul className="footer__list">
            <li>8:00am- 10:00pm (All Days)</li>
          </ul>
        </div>
        <div className="about__imageWrap">
          <Image
            src="https://mbexpertllc.com/wp-content/uploads/2026/03/muscular-car-service-worker-repairing-vehicle-1-scaled.jpg"
            alt="Mobile mechanic work"
            fill
            className="cover"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
      </section>
    </main>
  );
}
