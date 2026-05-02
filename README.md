# MB Expert LLC Redesign

This folder is the starting point for the new version of the MB Expert LLC website.

## What we learned from the current site

- The business is a mobile mechanic and locksmith service.
- The current site already has these public pages:
  - Home
  - About Us
  - Services
  - Pricing
  - Blogs
  - Gallery
  - Contact Us
- The current homepage already uses a strong service-led structure:
  - hero
  - estimate form
  - about section
  - services
  - how it works
  - testimonials
  - FAQ
  - pricing
  - contact info

## Design direction

- Keep the site white and clean.
- Use the turquoise from the logo as the main accent color.
- Replace the old yellow-style accent with turquoise accents and soft teal tints.
- Keep the logo readable in both dark and white versions.
- Make the layout feel premium, calm, and more trustworthy than the current Elementor build.

### Brand palette

- `brand`: `#66A6A5`
- `brand-strong`: `#4F9392`
- `brand-soft`: `#DFF2F2`
- `background`: `#FFFFFF`
- `surface`: `#F6FBFB`
- `text`: `#102324`
- `muted`: `#5B6F70`
- `border`: `#D6E7E7`

## Proposed site structure

### Home

- hero with clear value proposition and call to action
- quick estimate form
- service highlights
- about teaser
- process steps
- testimonials
- FAQ
- pricing preview
- contact strip

### About

- company story
- service area
- why choose us
- tools / diagnostic capability
- CTA

### Services

- service overview
- individual service cards
- grouped service categories
- CTA to contact

### Pricing

- pricing cards
- service inclusions
- disclaimer / notes
- CTA

### Gallery

- work examples
- before / after style visual proof

### Blogs

- article index
- article detail pages

### Contact

- phone
- email
- hours
- service area
- contact form

## Sanity document model

The first version should stay simple and safe for client editing:

- `siteSettings`
- `homePage`
- `page`
- `service`
- `pricingPlan`
- `testimonial`
- `faqItem`
- `galleryItem`
- `blogPost`

## Next steps

1. finish the initial Sanity schema set
2. wire the Next.js frontend to Sanity with GROQ
3. create the page layout and component system
4. create a separate GitHub repository for this client
