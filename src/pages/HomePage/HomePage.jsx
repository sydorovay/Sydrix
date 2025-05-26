// src/pages/HomePage/HomePage.jsx
import FullPageSlider from '@/components/FullPageSlider/FullPageSlider';

export default function HomePage({ t, theme }) {
  const handleContact = () => {
    window.location.href = `mailto:${t.email}`;
  };

  return (
    <FullPageSlider
      t={t}
      theme={theme}
      onContact={handleContact}
    />
  );
}