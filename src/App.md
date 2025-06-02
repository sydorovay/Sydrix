# 🧩 `App.tsx` — Кореневий компонент застосунку

Файл `src/App.tsx` відповідає за ініціалізацію глобальних контекстів, маршрутизацію, обробку помилок і асинхронне завантаження вмісту застосунку. Це ― ядро, що поєднує інфраструктурні частини перед рендерингом інтерфейсу.

---

## 🔍 Призначення

- Підключення **провайдерів контексту**:
  - Теми (`ThemeProvider`)
  - Мови (`LanguageProvider`)
  - Глобального стану (`RootProvider`)
- Обгортання в **обробник помилок** (`ErrorBoundary`)
- Встановлення **маршрутизації** через `react-router-dom`
- Рендеринг основного вмісту через `AppContent` (із `React.Suspense`)
- Обробка критичних помилок через логер `logError`

---

## 📁 Структура

```tsx
// src/App.tsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import AppContent from './components/AppContent/AppContent';
import RootProvider from './context/RootProvider';
import LoadingFallback from './components/LoadingFallback/LoadingFallback';

import './styles/themes.css';
import './styles/index.css';

function logError(error: Error, info: React.ErrorInfo) {
  console.error('[App Error]', error, info);
}

export default function App() {
  return (
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
  );
}


🧩 Ключові компоненти
Компонент	Призначення
ThemeProvider	Надає контекст теми (dark / light)
LanguageProvider	Локалізація: доступ до перекладів
ErrorBoundary	Обробка непередбачених помилок
RootProvider	Додаткові глобальні стани (auth, settings тощо)
Router	Навігація між сторінками
Suspense	Лоадер при асинхронному завантаженні
AppContent	Основний вміст, сторінки, логіка

✅ Переваги
Модульність: Контексти можна вмикати/вимикати незалежно

Захищеність: Обробка критичних помилок і fallback

Lazy-завантаження: Оптимізація продуктивності

Підтримка i18n і теми з коробки

📌 Пов'язаний файл
Компонент App використовується у main.tsx:

tsx
Copy
Edit
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

📂 Розміщення
css
Copy
Edit
src/
├── App.tsx ← цей файл
├── context/
│   ├── ThemeProvider.tsx
│   ├── LanguageProvider.tsx
│   └── RootProvider.tsx
├── components/
│   ├── AppContent/
│   ├── ErrorBoundary/
│   └── LoadingFallback/
├── styles/
│   ├── index.css
│   └── themes.css
ℹ️ Коли проєкт зростатиме, App.tsx можна розбити на AppProviders.tsx + AppRouter.tsx для більшої гнучкості.