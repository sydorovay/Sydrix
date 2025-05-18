export const getTranslation = (obj, language = 'gb') => {
  return obj[language] || obj.gb || '';
};