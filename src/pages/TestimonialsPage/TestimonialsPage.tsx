import type { LangData } from '@/types/langTypes';

type TestimonialsPageProps = {
  t: <K extends keyof LangData>(key: K) => LangData[K];
};

export default function TestimonialsPage({ t }: TestimonialsPageProps) {
  return (
    <main>
      <h1>{t('testimonials')}</h1>
      <p>{t('testimonialsText')}</p>
    </main>
  );
}
