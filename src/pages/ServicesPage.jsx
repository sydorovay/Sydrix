import React from 'react';
import services from '../translations/services/services';

const ServicesPage = ({ language }) => {
  return (
    <main>
      <h1>
        {{
          en: 'Services',
          ua: 'Послуги',
          de: 'Dienstleistungen',
          pl: 'Usługi',
        }[language] || 'Services'}
      </h1>
      <p>
        {{
          en: 'Feel free to reach out via email or phone.',
          ua: 'Зв’яжіться з нами за допомогою електронної пошти або телефону.',
          de: 'Kontaktieren Sie uns gerne per E-Mail oder Telefon.',
          pl: 'Skontaktuj się z nami przez e-mail lub telefon.',
        }[language] || 'Feel free to reach out via email or phone.'}
      </p>

      <ul>
        {services.map(({ id, title, description }) => (
          <li key={id}>
            <h2>{title[language]}</h2>
            <p>{description[language]}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ServicesPage;
