import React from 'react';

export interface PartnershipPageProps {
  t?: {
    partnership?: string;
    partnershipText?: string;
  };
}

const PartnershipPage: React.FC<PartnershipPageProps> = ({ t }) => {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>{t?.partnership || 'Partnership'}</h1>
      <p>{t?.partnershipText || 'Feel free to reach out via email or phone.'}</p>
    </section>
  );
};

export default PartnershipPage;
