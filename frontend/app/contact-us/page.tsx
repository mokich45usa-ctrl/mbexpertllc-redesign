import Image from "next/image";
import { SiteChrome } from "../../components/site-chrome";
import { sanityFetch } from "../../lib/sanity/client";
import { siteSettingsQuery } from "../../lib/sanity/queries";

type SiteSettings = {
  companyName?: string;
  primaryPhone?: string;
  primaryEmail?: string;
  serviceArea?: string;
  hours?: string;
};

export default async function ContactUsPage() {
  const siteSettings = await sanityFetch<SiteSettings>(siteSettingsQuery);
  const phone = siteSettings?.primaryPhone ?? "231-392-6204";
  const email = siteSettings?.primaryEmail ?? "mbexpertllc@gmail.com";
  const area = siteSettings?.serviceArea ?? "Northern Michigan";
  const hours = siteSettings?.hours ?? "8:00am- 10:00pm (All Days)";

  return (
    <main className="site">
      <SiteChrome settings={siteSettings} />
      <section className="section section--split">
        <div className="content-block">
          <div className="section__title">Contact Info</div>
          <ul className="footer__list">
            <li>{area}</li>
            <li>
              <a href={`tel:${phone}`}>{phone}</a>
            </li>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
          <div className="section__title footer__title">Opening Hours</div>
          <ul className="footer__list">
            <li>{hours}</li>
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
