import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';
import LanguageProvider from './context/LanguageProvider';
import { ThemeProvider } from './context/ThemeProvider';
import './styles/variables.css';



export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
