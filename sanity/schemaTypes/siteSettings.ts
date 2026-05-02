import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "primaryPhone",
      title: "Primary Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "primaryEmail",
      title: "Primary Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "serviceArea",
      title: "Service Area",
      type: "string",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "string",
    }),
    defineField({
      name: "logoDark",
      title: "Logo Dark",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoLight",
      title: "Logo Light",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      description: "Use the turquoise from the logo.",
      validation: (Rule) => Rule.regex(/^#([0-9a-fA-F]{6})$/),
    }),
  ],
  preview: {
    select: {
      title: "companyName",
      subtitle: "serviceArea",
      media: "logoDark",
    },
  },
});
