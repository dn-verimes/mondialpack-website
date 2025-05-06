import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'
import './lib/i18n' // Import i18n configuration
import './index.css'

// Wait for i18next to initialize before rendering
import i18next from 'i18next';

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>,
  )
};

// Initialize i18next and then render
i18next.init().then(() => {
  renderApp();
}).catch((err) => {
  console.error('Error initializing i18next:', err);
  // Render anyway to show at least something
  renderApp();
});
