
# AppContent Component

This file is the main layout and routing logic for the application. It handles theme and language contexts, loads page components lazily, and structures the overall layout including the header, scrollable content area, and footer.

---

## 📄 File: `src/components/AppContent/AppContent.tsx`

### 🔍 Purpose

- Main application layout.
- Theme and language initialization.
- Lazy loading of all pages.
- Smooth scroll experience with sticky header.
- Stars background for a dynamic look.

---

## 🧩 Imports

- **React**
  - `lazy`, `Suspense`, `ReactNode` – for code-splitting and fallback UI
- **react-router-dom**
  - `Routes`, `Route` – routing for the app
- **Custom Components**
  - `TopBar`, `Footer`, `ScrollToTop`, `StarsBackgroundWithNebula`
- **Context/Hooks**
  - `useThemeContext`, `useLanguage`, `useInitEffects`
- **Utils**
  - `createStringTranslator` – utility for typed translations
- **Styles**
  - CSS module styles from `AppContent.module.css`

---

## 🌗 Theme & Language Context

```ts
const { theme, toggleTheme } = useThemeContext();
const { lang, setLang, t } = useLanguage();
const typedT = createStringTranslator(t);
```

- **Theme switching** via `toggleTheme`.
- **Language initialization** and translation through `t` and `typedT`.

---

## ⏳ Lazy-loaded Pages

All pages are loaded lazily using `React.lazy()`:

```ts
const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
// ... other pages ...
```

---

## 📥 Loading Fallback

```tsx
function LoadingFallback({ children }: FallbackProps) {
  return (
    <div role="alert" aria-busy="true" className={styles.fallback}>
      {children ?? 'Loading...'}
    </div>
  );
}
```

A simple fallback that appears while lazy-loaded components are loading.

---

## 🧱 Layout Structure

```tsx
<div className={`${styles.app} ${themeCls}`}>
```

### 1. **Header**
- Contains the animated background and `TopBar`.
- Sticky and theme-aware.

### 2. **Main Content**
- Uses `snapContainer` for smooth scroll and `snapSection` for scroll-snapping (defined in CSS).
- Wrapped with `<Suspense>` to allow fallback UI.

### 3. **Routes**
Each route points to a page component:
```tsx
<Route path="/about" element={<AboutPage t={t} theme={theme} />} />
<Route path="/faq" element={<FaqPage t={{ faq: typedT('faq'), faqText: typedT('faqText') }} />} />
```

### 4. **Footer**
- Displays at the bottom after scrollable content.

---

## 📌 Accessibility

- `role="banner"`, `role="main"` – semantic landmark roles
- `aria-busy="true"` – announced by screen readers while loading

---

## 🎨 Styling

Uses `AppContent.module.css`:
- Light/dark theme classes applied on root `.app`
- Sticky header
- Scroll snapping
- Styled fallback and scrollbars

---

## ✅ Summary

This component ties together:
- UI structure
- Contexts (theme/language)
- Routing
- Page transitions

All with accessibility and visual polish in mind.

---

_Last updated: 2025-06-01_
