import Image from "next/image";

const posts = [
  "https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/1188.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/3940.jpg",
];

export default function BlogsPage() {
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
        <div className="section__title">Blogs</div>
        <p className="section__lead">This section is ready to become a real blog feed in Sanity later.</p>
        <div className="pricing-grid" style={{ marginTop: 24 }}>
          {posts.map((src, index) => (
            <article className="pricing-card" key={src}>
              <Image src={src} alt="" width={1000} height={1070} className="pricing-card__image" />
              <h3>Article {index + 1}</h3>
              <p className="section__lead">Preview card for future blog content.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
