# `main.tsx` — Точка входу в застосунок

Файл `main.tsx` є головною точкою входу для React-застосунку. Він виконує ініціалізацію рендерингу та завантаження кореневого компонента `App`.

---

## 🔍 Призначення

- Пошук DOM-елемента з `id="root"`.
- Ініціалізація React root через `ReactDOM.createRoot`.
- Рендер застосунку в обгортці `<React.StrictMode>` для допомоги з виявленням потенційних проблем.

---

## 📁 Структура файлу

```tsx
// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

🔗 Зв’язок з App.tsx
Усі глобальні контексти та логіка застосунку (теми, мова, маршрутизація, обробка помилок) вже огортають AppContent всередині App.tsx. Це дозволяє main.tsx залишатись простим і чистим.

tsx
Copy
Edit
// Приклад обгортки в App.tsx
<ThemeProvider>
  <LanguageProvider>
    <ErrorBoundary onError={logError}>
      <RootProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <AppContent />
          </Suspense>
        </Router>
      </RootProvider>
    </ErrorBoundary>
  </LanguageProvider>
</ThemeProvider>

✅ Переваги
Чистота: Вся логіка провайдерів винесена до App.tsx.

Масштабованість: main.tsx залишається незмінним, навіть якщо в App.tsx змінюються контексти або навігація.

Безпечність: Використання React.StrictMode допомагає знайти потенційні проблеми у dev-режимі.

📌 Де використовується
main.tsx автоматично викликається Vite під час запуску застосунку.

App містить усю основну логіку застосунку.

