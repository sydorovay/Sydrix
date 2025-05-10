// src/hooks/useLanguage.jsx
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';  // Імпортуємо за замовчуванням

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
