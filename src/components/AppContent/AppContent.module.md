
# `AppContent.module.css` — Стилі компонента AppContent

Цей CSS-модуль відповідає за оформлення кореневого компонента `AppContent`. Основні завдання стилів — керування структурою сторінки, підтримка темної/світлої теми, оформлення секцій та скролінгу.

---

## 🔷 Кореневий клас `.app`
```css
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}
```

---

## 🎨 Теми

```css
.light-theme { ... }
.dark-theme { ... }

.app {
  background-color: var(--background-color-light);
  color: var(--text-color-light);
}

.app.dark-theme {
  background-color: var(--background-color-dark);
  color: var(--text-color-dark);
}
```

Кольорові змінні тем визначені окремо для темної і світлої теми, що дозволяє легко перемикатися між режимами без повторення стилів.

---

## 🧭 Header `.topHalf`

```css
.topHalf {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--background-color-light);
}

.dark-theme .topHalf {
  background-color: var(--background-color-dark);
}
```

Фіксоване розміщення заголовку сторінки з підтримкою тем.

---

## 🖱️ Snap Scroll — `.snapContainer`

```css
.snapContainer {
  flex: 1 1 auto;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4rem;
}
```

Плавний скролінг зі снап-позиціюванням для секцій. Також налаштований кастомний скролбар для WebKit і Firefox.

---

## 📄 Секції — `.snapSection`

```css
.snapSection {
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
}
```

Кожна секція займає повний viewport, центрована вертикально й горизонтально.

---

## 🔝 Кнопка "наверх" — `.topButton`

```css
.topButton {
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Адаптивна, інтерактивна кнопка повернення на початок сторінки.

---

## 💡 Інші стилі

- `.fallback`: базове оформлення компоненту LoadingFallback
- `.section`: блок-секції (наприклад, для About page)
- `.title`: адаптивні заголовки

---

## 📱 Адаптивність

- Кнопка `.topButton` зменшується на малих екранах
- Збільшуються відступи й шрифти на ширших екранах

---

## 📦 Висновок

Файл `AppContent.module.css` — це добре структурований і адаптивний набір стилів для забезпечення візуальної цілісності всього компонента AppContent. Він підтримує теми, анімації прокрутки, мобільну адаптацію та візуальні ефекти для покращення UX.

> Розташування: `src/components/AppContent/AppContent.module.css`
