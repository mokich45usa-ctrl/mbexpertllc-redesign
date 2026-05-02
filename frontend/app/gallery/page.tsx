import Image from "next/image";

const gallery = [
  "https://mbexpertllc.com/wp-content/uploads/2026/03/2149891383.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/11887-e1772742262479.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/1188.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/3940.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/105375.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/16589.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/muscular-car-service-worker-repairing-vehicle-1-scaled.jpg",
  "https://mbexpertllc.com/wp-content/uploads/2026/03/muscular-car-service-worker-repairing-vehicle-scaled.jpg",
];

export default function GalleryPage() {
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
        <div className="section__title">Gallery</div>
        <div className="service-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {gallery.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={1500}
              height={1000}
              className="service-card__image"
              style={{ aspectRatio: "1.2 / 1", objectFit: "cover" }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
