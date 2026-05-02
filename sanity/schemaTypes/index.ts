import { blogPost } from "./blogPost";
import { faqItem } from "./faqItem";
import { galleryItem } from "./galleryItem";
import { homePage } from "./homePage";
import { page } from "./page";
import { pricingPlan } from "./pricingPlan";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { testimonial } from "./testimonial";

export const schemaTypes = [
  siteSettings,
  homePage,
  page,
  service,
  pricingPlan,
  testimonial,
  faqItem,
  galleryItem,
  blogPost,
];
