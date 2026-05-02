import Image from "next/image";

type SiteSettings = {
  companyName?: string;
  primaryPhone?: string;
  serviceArea?: string;
};

const defaultLogo =
  "https://mbexpertllc.com/wp-content/uploads/2026/03/image-removebg-preview-e1775584985293.png";

export function SiteChrome({ settings }: { settings?: SiteSettings | null }) {
  const companyName = settings?.companyName ?? "MB Expert LLC";
  const phone = settings?.primaryPhone ?? "231-392-6204";
  const area = settings?.serviceArea ?? "Northern Michigan";

  return (
    <>
      <div className="topbar">
        <div className="topbar__item">8:00am- 10:00pm (All Days)</div>
        <a className="topbar__item" href={`tel:${phone}`}>
          Call Now/Text {phone}
        </a>
        <div className="topbar__item">{area}</div>
      </div>
      <header className="header">
        <a className="brand" href="/">
          <Image src={defaultLogo} alt={companyName} width={483} height={283} className="brand__logo" priority />
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
