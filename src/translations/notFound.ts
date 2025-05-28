type LangCode = 'ua' | 'gb' | 'pl' | 'fr' | 'de' | 'it';

type NotFoundTranslationKeys = 'notFoundCode' | 'notFoundMessage' | 'notFoundLink';

type NotFoundTranslations = {
  [key in LangCode]: Record<NotFoundTranslationKeys, string>;
};

const translations: NotFoundTranslations = {
  ua: {
    notFoundCode: '404',
    notFoundMessage: 'Сторінку не знайдено',
    notFoundLink: 'Повернутись на головну',
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

type Props = {
  language?: LangCode;
  id: NotFoundTranslationKeys;
};

const NotFoundTranslate = ({ language = 'gb', id }: Props): string => {
  const langPack = translations[language] || translations.ua;
  return langPack[id];
};

export default NotFoundTranslate;
