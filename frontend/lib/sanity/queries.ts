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

export const servicesQuery = /* groq */ `
  *[_type == "service"] | order(sortOrder asc, title asc){
    _id,
    title,
    slug,
    shortDescription,
    description,
    featuredImage,
    featured,
    sortOrder
  }
`;

export const serviceBySlugQuery = /* groq */ `
  *[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    shortDescription,
    description,
    featuredImage,
    featured
  }
`;

export const pricingPlansQuery = /* groq */ `
  *[_type == "pricingPlan"] | order(featured desc, title asc){
    _id,
    title,
    price,
    summary,
    features,
    featured,
    ctaLabel
  }
`;

export const galleryItemsQuery = /* groq */ `
  *[_type == "galleryItem"] | order(title asc){
    _id,
    title,
    image,
    alt,
    category
  }
`;

export const blogPostsQuery = /* groq */ `
  *[_type == "blogPost"] | order(publishedAt desc, title asc){
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    categories
  }
`;

export const blogPostBySlugQuery = /* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    body,
    categories
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
