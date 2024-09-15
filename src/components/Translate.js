import React, { useState } from 'react';
import PhoneLayout from './PhoneLayout';
import './Translate.css';

const Translate = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('hindi');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Simulate translation logic
    let translation = '';
    if (language === 'hindi') {
      translation = 'अनुवादित पाठ (Hindi)'; // Dummy translation
    } else if (language === 'french') {
      translation = 'Texte traduit (French)'; // Dummy translation
    }
    setTranslatedText(translation);
  };

  return (
    <PhoneLayout title="Translate">
      <div className="translate-container">
        <h3>Translate Text</h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text in English"
        />
        <div className="language-options">
          <label>
            <input
              type="radio"
              value="hindi"
              checked={language === 'hindi'}
              onChange={(e) => setLanguage(e.target.value)}
            />
            Hindi
          </label>
          <label>
            <input
              type="radio"
              value="french"
              checked={language === 'french'}
              onChange={(e) => setLanguage(e.target.value)}
            />
            French
          </label>
        </div>
        <button className="primary" onClick={handleTranslate}>Translate</button>
        {translatedText && <p className="translation-result">{translatedText}</p>}
      </div>
    </PhoneLayout>
  );
};

export default Translate;
