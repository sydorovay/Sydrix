# 📦 Компонент `BenefitModal`

Компонент `BenefitModal` — це модальне вікно в React + TypeScript, яке відображає список переваг із можливістю вибору та перегляду деталей. Підтримує теми (`light`/`dark`), фокус-пастку, закриття по Escape і кліку поза модалкою.

---

## Властивості (Props)

| Назва             | Тип                                        | Опис                              |
|-------------------|--------------------------------------------|----------------------------------|
| `benefits`        | `BenefitItem[]`                            | Масив об’єктів переваг           |
| `selectedBenefit` | `BenefitItem \| null`                      | Вибрана перевага                 |
| `onSelectBenefit` | `(benefit: BenefitItem \| null) => void` | Колбек вибору переваги           |
| `onClose`         | `() => void`                               | Колбек закриття модалки          |
| `theme`           | `'light' \| 'dark'`                        | Тема інтерфейсу                  |

---

## Тип BenefitItem

```ts
interface BenefitItem {
  id: string;
  icon?: React.ElementType;
  title: string;
  description: string;
}
