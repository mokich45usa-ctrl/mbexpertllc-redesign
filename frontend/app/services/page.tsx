import Image from "next/image";

const services = [
  ["Comprehensive System Scanning", "A complete health check of all vehicle control modules to ensure every system is communicating correctly."],
  ["DTC Analysis & Interpretation", "Expert reading and interpretation of active and stored Diagnostic Trouble Codes (DTCs)."],
  ["Live Data Stream Monitoring", "Real-time analysis of engine and sensor performance data to identify intermittent faults."],
  ["Service Light Reset", 'Professional clearing of "Check Engine," "Service Engine Soon," and other dashboard maintenance indicators.'],
  ["Electronic Health Reports", "A detailed overview of your vehicle’s electronic ecosystem and communication status."],
  ["Advanced Performance Testing", "On-site compression and vacuum testing to evaluate engine efficiency and management systems."],
  ["Ignition & Fuel Systems", "Expert diagnostics and professional replacement of spark plugs, coils, and fuel injectors."],
  ["Emissions & EVAP Services", "Diagnostics and replacement of O2 sensors, EGR valves, and PCV systems to resolve performance issues."],
  ["Intake & Boost System Diagnostics", "Precision boost leak testing and performance checks for turbocharged systems."],
  ["VVT Services", "Testing and replacement of VVT solenoids and position sensors."],
  ["Module Programming", "Replacement, coding, and flashing for all vehicle control units using advanced diagnostic equipment."],
  ["Starting & Charging Systems", "Mobile testing and replacement of batteries, starters, and alternators."],
  ["Emergency Car Lockout", "Rapid, damage-free vehicle entry for keys locked inside or lost."],
  ["Smart Key & Fob Programming", "On-site programming of high-security smart keys and remote fobs."],
  ["Precision Key Cutting", "Professional mechanical key cutting and duplication performed at your location."],
  ["Immobilizer Reset", "Synchronization and reset of vehicle anti-theft and immobilizer systems."],
  ["Pre-Purchase Evaluation", "A specialized mobile audit focusing on the vehicle’s electronic systems and engine performance parameters."],
  ["Network & Communication Diagnostics", "Troubleshooting complex CAN-Bus and inter-module communication faults across the entire network."],
  ["Hybrid & EV Systems Diagnostics", "Certified safe diagnostics and health checks for high-voltage electrical systems and components."],
  ["Advanced Electrical Troubleshooting", "Locating short circuits, parasitic battery drains, and expert wiring repairs."],
];

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

export default function ServicesPage() {
  return (
    <main className="site">
      {chrome()}
      <section className="section">
        <div className="section__title">Services</div>
        <div className="section__title" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.3rem)" }}>
          Our Services
        </div>
        <p className="section__lead">We offer full service auto repair &amp; maintenance &amp; Locksmith</p>
        <div className="divider" />
        <div className="service-grid" style={{ marginTop: 24 }}>
          {services.map(([title, description], index) => (
            <article className="service-card" key={title}>
              <Image
                src={index % 2 === 0
                  ? "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4375.png"
                  : "https://mbexpertllc.com/wp-content/uploads/2026/03/Group-4376-1.png"}
                alt=""
                width={246}
                height={246}
                className="service-card__image"
              />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
