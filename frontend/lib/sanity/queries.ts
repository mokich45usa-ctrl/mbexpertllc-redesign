export const homePageQuery = /* groq */ `
  *[_type == "homePage"][0]{
    heroEyebrow,
    heroTitle,
    heroDescription,
    heroImage,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    trustPoints,
    aboutTitle,
    aboutBody,
    featuredServices[]->{
      _id,
      title,
      slug,
      shortDescription,
      featuredImage
    },
    processSteps,
    featuredTestimonials[]->{
      _id,
      name,
      role,
      quote,
      rating,
      avatar
    },
    featuredFaqs[]->{
      _id,
      question,
      answer
    },
    featuredPlans[]->{
      _id,
      title,
      price,
      summary,
      features,
      featured
    },
    contactNote
  }
`;

export const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings"][0]{
    companyName,
    tagline,
    primaryPhone,
    primaryEmail,
    serviceArea,
    hours,
    logoDark,
    logoLight,
    accentColor
  }
`;

export const pageBySlugQuery = /* groq */ `
  *[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    heroEyebrow,
    heroTitle,
    heroDescription,
    body,
    heroImage,
    ctaLabel,
    ctaHref
  }
`;
