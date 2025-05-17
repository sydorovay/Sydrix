const translations = {
  ua: {
    notFoundCode: '404',
    notFoundMessage: 'Сторінку не знайдено',
    notFoundLink: 'Повернутись на головну',
    // додай сюди інші ключі перекладу для сайту
  },
  gb: {
    notFoundCode: '404',
    notFoundMessage: 'Page not found',
    notFoundLink: 'Go back to home',
  },
  pl: {
    notFoundCode: '404',
    notFoundMessage: 'Strona nie znaleziona',
    notFoundLink: 'Powrót do strony głównej',
  },
  fr: {
    notFoundCode: '404',
    notFoundMessage: 'Page non trouvée',
    notFoundLink: 'Retour à l’accueil',
  },
  de: {
    notFoundCode: '404',
    notFoundMessage: 'Seite nicht gefunden',
    notFoundLink: 'Zurück zur Startseite',
  },
  it: {
    notFoundCode: '404',
    notFoundMessage: 'Pagina non trovata',
    notFoundLink: 'Torna alla pagina principale',
  },
};

const NotFoundTranslate = ({ language = 'ua', id }) => {
  const langPack = translations[language] || translations.ua;
  return langPack[id] || id;
};

export default NotFoundTranslate;