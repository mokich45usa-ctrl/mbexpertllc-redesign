import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "MB Expert LLC",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Schedule Service",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA Href",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "View Services",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA Href",
      type: "string",
      initialValue: "/services",
    }),
    defineField({
      name: "trustPoints",
      title: "Trust Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "aboutTitle",
      title: "About Title",
      type: "string",
      initialValue: "About Us",
    }),
    defineField({
      name: "aboutBody",
      title: "About Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featuredServices",
      title: "Featured Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [{ type: "processStep" }],
    }),
    defineField({
      name: "featuredTestimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
    defineField({
      name: "featuredFaqs",
      title: "Featured FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqItem" }] }],
    }),
    defineField({
      name: "featuredPlans",
      title: "Featured Plans",
      type: "array",
      of: [{ type: "reference", to: [{ type: "pricingPlan" }] }],
    }),
    defineField({
      name: "contactNote",
      title: "Contact Note",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "Main landing page content",
      };
    },
  },
});
