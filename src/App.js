import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Utilisation du hook useState pour gérer l'état du compteur
  const [count, setCount] = useState(0);

  // Utilisation du hook useEffect pour mettre à jour le titre de la page
  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  }, [count]);  // Exécute l'effet uniquement lorsque 'count' change

  return (
    <div className="App">
      <header className="App-header">
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez moi!
        </button>
      </header>
    </div>
  );
}

export default App;
