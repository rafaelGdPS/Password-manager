import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [displayForm, setDisplayForm] = useState(false);

  const handleClick = () => {
    setDisplayForm(true);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      { displayForm
        ? <Form setDisplayForm={ setDisplayForm } />
        : <button onClick={ handleClick }>Cadastrar nova senha</button> }

    </div>
  );
}

export default App;
