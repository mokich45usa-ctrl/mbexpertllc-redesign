# Frontend

Базовый каркас Next.js для MB Expert LLC.

## Файлы

- `app/layout.tsx` - общий layout и typography
- `app/page.tsx` - главная страница
- `app/globals.css` - глобальные стили и палитра
- `lib/sanity/client.ts` - клиент Sanity
- `lib/sanity/queries.ts` - GROQ-запросы

## Цвета

Вся акцентная система строится вокруг бирюзового из логотипа:

- `#66A6A5`
- `#4F9392`
- `#DFF2F2`

## Что будем рендерить первым

- hero
- trust points
- about teaser
- featured services
- process steps
- testimonials
- FAQ
- pricing preview

## Routing plan

- `app/page.tsx` - homepage
- `app/[slug]/page.tsx` - reusable content pages from the `page` document

## Запуск

Когда это будет настоящий Next.js проект:

```bash
npm install
npm run dev
```
