import React from 'react';
import { useLanguage } from '../context/LanguageProvider';

interface TranslateProps {
  id: keyof ReturnType<typeof useLanguage>['t'];
  className?: string;
}

const Translate: React.FC<TranslateProps> = ({ id, className }) => {
  const { t } = useLanguage();
  const translation = t(id);

  // Якщо переклад - рядок або масив рядків - відображаємо відповідно
  if (typeof translation === 'string') {
    return <>{translation}</>;
  }
  if (Array.isArray(translation)) {
    return <>{translation.join(' ')}</>; // або інша логіка рендеру масиву
  }

  // Якщо щось інше (наприклад benefits), просто повертаємо null або можна кастомізувати
  return null;
};

export default Translate;
