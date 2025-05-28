import FullPageSlider from '../../components/FullPageSlider/FullPageSlider';
import { LangData } from '../../types/langTypes';

interface HomePageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark';
}

export default function HomePage({ t, theme }: HomePageProps) {
  const handleContact = (): void => {
    // Безпечна конкатенація, припускаємо, що t('email') завжди string
    const email = t('email');
    if (typeof email === 'string') {
      window.location.href = `mailto:${email}`;
    } else {
      console.warn('Email translation is not a string');
    }
  };

  return (
    <FullPageSlider
      t={t}
      theme={theme}
      onContact={handleContact}
    />
  );
}
