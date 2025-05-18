// src/components/Translate.jsx
import translations from '../translations/translations';

const Translate = ({ language = 'gb', id }) => {
  const langPack = translations[language] || translations.gb;
  return langPack[id] || id;
};

export default Translate;
