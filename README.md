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

## Завдання та відповідні файли

### Завдання 1. Підготовка проєкту

| Файл / папка                           | Призначення                               |
| -------------------------------------- | ----------------------------------------- |
| [package.json](package.json)           | Команди запуску та залежності проєкту.    |
| [package-lock.json](package-lock.json) | Точні версії залежностей.                 |
| [vite.config.js](vite.config.js)       | Налаштування Vite, Pug-плагіна та шляхів. |
| [.gitignore](.gitignore)               | Виключення node_modules і dist із Git.    |

### Завдання 2. Pug

| Файл / папка                                                           | Призначення                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| [src/layouts/main.pug](src/layouts/main.pug)                           | Базовий макет: блоки, підключення компонентів та міксинів. |
| [src/pages/index.pug](src/pages/index.pug)                             | Наслідування макета через extends і доповнення meta.       |
| [src/components/](src/components/)                                     | Шапка, футер, меню та секції сторінки.                     |
| [src/data/](src/data/)                                                 | Масиви даних для повторюваних елементів.                   |
| [src/components/sections/works.pug](src/components/sections/works.pug) | Виведення портфоліо циклом each.                           |
| [src/mixins/work-card.pug](src/mixins/work-card.pug)                   | Шаблон картки роботи.                                      |
| [src/mixins/btn.pug](src/mixins/btn.pug)                               | Міксин кнопки з block і додатковими атрибутами.            |
| [src/mixins/icon.pug](src/mixins/icon.pug)                             | Вибір SVG-іконки через case / when.                        |
| [src/mixins/picture.pug](src/mixins/picture.pug)                       | Міксин адаптивного зображення.                             |
| [src/includes/icons.pug](src/includes/icons.pug)                       | SVG-спрайт іконок.                                         |

### Завдання 3. SCSS

| Файл / папка                                                                 | Призначення                                              |
| ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| [src/styles/main.scss](src/styles/main.scss)                                 | Єдина точка входу стилів, підключення через @use.        |
| [src/styles/abstracts/_index.scss](src/styles/abstracts/_index.scss)         | Реекспорт модулів через @forward.                        |
| [src/styles/abstracts/_tokens.scss](src/styles/abstracts/_tokens.scss)       | Дизайн-токени: кольори, шрифти, відступи та брейкпоінти. |
| [src/styles/abstracts/_mixins.scss](src/styles/abstracts/_mixins.scss)       | Міксини mq(), flex-center і focus-ring.                  |
| [src/styles/abstracts/_functions.scss](src/styles/abstracts/_functions.scss) | Функція rem() для переведення px у rem.                  |
| [src/styles/base/_tokens.scss](src/styles/base/_tokens.scss)                 | Генерація CSS custom properties із токенів.              |
| [src/styles/components/](src/styles/components/)                             | Стилі окремих компонентів.                               |
| [src/styles/layout/](src/styles/layout/)                                     | Контейнер, секції та адаптивне розташування.             |

### Завдання 4. PostCSS: Autoprefixer і Browserslist

| Файл / папка                           | Призначення                               |
| -------------------------------------- | ----------------------------------------- |
| [postcss.config.js](postcss.config.js) | Підключення Autoprefixer для обробки CSS. |
| [.browserslistrc](.browserslistrc)     | Перелік цільових браузерів.               |

### Завдання 5. Зображення: WebP/AVIF, picture, srcset

| Файл / папка                                     | Призначення                                               |
| ------------------------------------------------ | --------------------------------------------------------- |
| [scripts/images.js](scripts/images.js)           | Генерація AVIF, WebP і JPEG у двох ширинах через Sharp.   |
| [src/assets/images/](src/assets/images/)         | Вихідні зображення.                                       |
| [public/images/](public/images/)                 | Підготовлені зображення різних форматів і розмірів.       |
| [src/mixins/picture.pug](src/mixins/picture.pug) | Виведення picture, source, srcset, sizes та lazy loading. |

### Завдання 6. Якість коду: Prettier, Stylelint, husky, lint-staged

| Файл / папка                           | Призначення                                            |
| -------------------------------------- | ------------------------------------------------------ |
| [.prettierrc](.prettierrc)             | Налаштування Prettier із плагіном Pug.                 |
| [.prettierignore](.prettierignore)     | Файли й папки, виключені з форматування.               |
| [.stylelintrc.json](.stylelintrc.json) | Правила SCSS, BEM-іменування та обмеження вкладеності. |
| [.husky/pre-commit](.husky/pre-commit) | Запуск lint-staged перед комітом.                      |
| [package.json](package.json)           | Команди format і lint та конфігурація lint-staged.     |

### Завдання 7. Публікація та README

| Файл / папка                                               | Призначення                                               |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| [.github/workflows/pages.yml](.github/workflows/pages.yml) | Перевірка, збірка та публікація через GitHub Actions.     |
| [vite.config.js](vite.config.js)                           | Production base /landing-keepsake-vite/ для GitHub Pages. |
| [README.md](README.md)                                     | Команди, опис проєкту та посилання на демо.               |
