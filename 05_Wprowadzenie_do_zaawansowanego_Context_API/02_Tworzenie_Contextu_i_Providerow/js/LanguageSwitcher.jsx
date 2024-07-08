// import { useContext } from 'react';
import { useLanguage } from './LanguageProvider.jsx';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <p>{language}</p>
      <button onClick={() => setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Polski' : 'English'))}>
        {language === 'English' ? 'Change language to Polish' : 'Zmień język na Angielski'}
      </button>
    </>
  );
};
