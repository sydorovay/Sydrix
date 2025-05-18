import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import NotFoundTranslate from '../../translations/notFound';

const NotFoundPage = ({ language = 'ua' }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>
        <NotFoundTranslate language={language} id="notFoundCode" />
      </h1>
      <p className={styles.message}>
        <NotFoundTranslate language={language} id="notFoundMessage" />
      </p>
      <Link to="/" className={styles.link}>
        <NotFoundTranslate language={language} id="notFoundLink" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
