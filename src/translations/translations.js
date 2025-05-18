// src/translations/translations.js
import ua from './ua'
import de from './de'
import gb from './gb'
import pl from './pl'
import it from './it'
import fr from './fr'

const translations = {
  ua,
  gb,
  de,
  pl,
  it,
  fr,
};

export const getLangPack = (lang = 'gb') => translations[lang] || translations.gb;

export default translations;
