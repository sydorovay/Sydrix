import Flag from 'react-world-flags';
import styles from './Langswitcher.module.css';

const LangSwitcher = ({ setLang }) => {
  return (
    <div className={styles.langSwitcher}>
      {['de', 'gb', 'pl', 'ua'].map(code => (
        <button 
          key={code}
          onClick={() => setLang(code)}
          className={styles.langButton}
        >
          <Flag code={code.toUpperCase()} alt={code} style={{ width: 32 }} />
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;
