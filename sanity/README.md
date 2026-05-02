# Sanity

Базовый каркас Sanity Studio для MB Expert LLC.

## Что здесь лежит

- `sanity.config.ts` - конфиг Studio
- `schemaTypes/` - схемы документов

## Модель контента

Первая версия строится вокруг безопасных singleton-документов:

- `siteSettings`
- `homePage`
- `page`

И отдельных сущностей для переиспользования:

- `service`
- `pricingPlan`
- `testimonial`
- `faqItem`
- `galleryItem`
- `blogPost`

## Почему так

- клиент редактирует контент без риска сломать макет
- общие данные хранятся в одном месте
- frontend может собирать страницы через GROQ без дублирования
