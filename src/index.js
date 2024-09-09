import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const nom = 'khalil';

const Welcome = (props) => {
  function handleClick() {
    alert('tu as cliqué!');
  }

  return (
    <div>
      <h1>Hello {props.nom}</h1>
      <h2>Bienvenue dans la formation React</h2>
      <h3>On est le {new Date().toLocaleDateString()}</h3>
      <button onClick={handleClick}>click ici</button>
    </div>
  );
};

root.render(<Welcome nom="Khalil" />);
