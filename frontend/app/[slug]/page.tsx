import { notFound } from "next/navigation";
import { sanityFetch } from "../../lib/sanity/client";
import { pageBySlugQuery } from "../../lib/sanity/queries";

type GenericPage = {
  title?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await sanityFetch<GenericPage>(pageBySlugQuery, { slug });

  if (!page) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <span className="eyebrow">{page.heroEyebrow ?? page.title ?? "MB Expert LLC"}</span>
          <h1>{page.heroTitle ?? page.title}</h1>
          <p className="section-copy">
            {page.heroDescription ?? "This page will be driven by a single Sanity document."}
          </p>
          {page.ctaLabel && page.ctaHref ? (
            <div className="actions">
              <a className="button button-primary" href={page.ctaHref}>
                {page.ctaLabel}
              </a>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
