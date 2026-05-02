import Image from "next/image";

function chrome() {
  return (
    <>
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
    </>
  );
}

export default function AboutUsPage() {
  return (
    <main className="site">
      {chrome()}
      <section className="section section--split">
        <div className="about__imageWrap">
          <Image
            src="https://mbexpertllc.com/wp-content/uploads/2026/03/1174.jpg"
            alt="MB Expert LLC"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="cover"
          />
        </div>
        <div className="content-block">
          <div className="section__title">About Us</div>
          <p>
            MB EXPERT LLC is a professional Mobile Mechanic service based in Traverse City, serving vehicle owners
            throughout Northern Michigan.
          </p>
          <p>
            We understand how valuable your time is, which is why we bring modern auto service directly to you—at
            your home, your workplace parking lot, or right at the location of an unexpected breakdown.
          </p>
          <p>
            We don’t just guess and swap parts; we find the root cause of the problem. Our mobile service specializes
            in in-depth diagnostics, electrical repair, engine systems, module programming, ADAS calibration, and
            locksmith services.
          </p>
        </div>
      </section>
    </main>
  );
}
