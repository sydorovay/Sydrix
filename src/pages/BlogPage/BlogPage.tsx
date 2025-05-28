import React, { FC } from 'react';
import { ThemeType } from '@/types/ThemeTypes';
import { StringLangKeys } from '@/utils/langUtils'; // ← Шлях має бути конкретним

interface BlogPageProps {
  t: (key: StringLangKeys) => string;
  theme: ThemeType;
}

const BlogPage: FC<BlogPageProps> = ({ t, theme }) => {
  return (
    <div data-theme={theme}>
      <h1>{t('blogTitle')}</h1>
      {/* Інші блоки блогу */}
    </div>
  );
};

export default BlogPage;
