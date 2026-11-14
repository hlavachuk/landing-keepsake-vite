# Keepsake · Лабораторна №9

[Демо на GitHub Pages](https://hlavachuk.github.io/landing-keepsake-vite/) · [Вихідна верстка лабораторної №7](https://github.com/hlavachuk/landing-keepsake)

Потрібен Node.js 24 LTS (від 24.15.0).

| Команда           | Призначення                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Встановити залежності та підключити Git-хуки                   |
| `npm run dev`     | Запустити локальний сервер Vite                                |
| `npm run build`   | Зібрати сайт у `dist`                                          |
| `npm run preview` | Переглянути готову збірку                                      |
| `npm run images`  | Повторно згенерувати адаптивні зображення через sharp          |
| `npm run format`  | Відформатувати файли через Prettier, зокрема Pug               |
| `npm run lint`    | Перевірити SCSS через Stylelint та форматування через Prettier |

`src/pages/index.pug` успадковує `src/layouts/main.pug`. Макет підключає компоненти, SVG-спрайт і міксини. Секції читають масиви з `src/data`. Портфоліо фільтрується CSS через `:checked ~`.

`src/styles/main.scss` завантажує модулі через `@use`. Індексні файли експортують partials через `@forward`. У `abstracts` лежать дизайн-токени та міксин для брейкпоінтів 768px і 1280px. Vite компілює Sass, застосовує PostCSS з Autoprefixer і мініфікує CSS. Browserslist охоплює останні дві версії Chrome, Firefox, Edge, Safari та iOS Safari. Фактичні цілі можна перевірити командами `npx browserslist` і `npx autoprefixer --info`.

Husky запускає lint-staged перед комітом. GitHub Actions перевіряє формат і стилі, збирає сайт і публікує `dist`. Усі залежності належать до `devDependencies`, бо потрібні на етапі підготовки та перевірки. `package-lock.json` фіксує версії для `npm ci`.

| Ресурс                        |   Розмір |
| ----------------------------- | -------: |
| CSS у лабораторній №7         |  22,5 КБ |
| Мініфікований CSS             |   ≈20 КБ |
| Початкові WebP (13 зображень) |  87,2 КБ |
| AVIF (обидві ширини)          |  48,0 КБ |
| WebP (обидві ширини)          |  72,6 КБ |
| JPEG (обидві ширини)          | 165,5 КБ |

У таблиці наведено суми розмірів файлів. Браузер завантажує один потрібний варіант з кожного `picture` відповідно до `sizes`, `srcset` і підтримки форматів.
