import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent/AppContent';
import LanguageProvider from './context/LanguageProvider';
import './styles/variables.css';



export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
