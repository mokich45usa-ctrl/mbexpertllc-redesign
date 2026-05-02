export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Let’s make the new version easy to call, easy to trust, and easy to read.</h1>
          <p className="section-copy">
            This placeholder can later be connected to Sanity and a form provider.
          </p>
          <div className="actions">
            <a className="button button-primary" href="tel:231-392-6204">
              Call 231-392-6204
            </a>
            <a className="button button-secondary" href="mailto:mbexpertllc@gmail.com">
              Email MB Expert LLC
            </a>
          </div>
        </div>
        <div className="card">
          <h3>Service area</h3>
          <p className="section-copy">Northern Michigan</p>
          <h3>Hours</h3>
          <p className="section-copy">8:00am-10:00pm (All Days)</p>
        </div>
      </section>
    </main>
  );
}
