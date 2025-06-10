import FullPageSlider from '@/components/FullPageSlider/FullPageSlider';
import { LangData } from '@/types/langTypes';

interface Props {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark';
}

export default function HomePage({ t, theme }: Props) {
  const handleContact = (): void => {
    const email = t('email');
    if (typeof email === 'string') {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <FullPageSlider t={t} theme={theme} onContact={handleContact} />
  );
}
