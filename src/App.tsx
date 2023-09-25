import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import { InitialValueType, List } from './components/types';
import RegisterList from './components/lista-de-cadastro';

const initialValue = {
  login: '',
  senha: '',
  serviceName: '',
  url: '',
} as InitialValueType;

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [registerList, setRegisterList] = useState<List>([]);

  const handleClick = () => {
    setDisplayForm(() => !displayForm);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      { displayForm
        ? <Form
            initialValue={ initialValue }
            setDisplayForm={ setDisplayForm }
            setRegisterList={ setRegisterList }
            registerList={ registerList }
        />
        : <button onClick={ handleClick }>Cadastrar nova senha</button> }
      {registerList.length !== 0
        ? <div>
          <h2>Senhas cadastradas</h2>
          <RegisterList registerList={ registerList } />
          </div>
        : <h2>Nenhuma senha cadastrada</h2>}
    </div>
  );
}

export default App;
