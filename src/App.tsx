import './App.css';
import React, { useState } from 'react';
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
  const [inputValue, setInputValue] = useState(initialValue);
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type } = event.target;
    const newValue = type === 'checkbox'
      ? (event.target as HTMLInputElement).checked : event.target.value;
    setInputValue({
      ...inputValue,
      [name]: newValue,
    });
  };
  const handleChecked = () => {
    setChecked((check) => !check);
  };
  const handleClear = (id: string) => {
    setRegisterList(registerList.filter(({ login }) => login !== id));
  };
  const handleClick = () => {
    setDisplayForm(() => !displayForm);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      { displayForm
        ? <Form
            inputValue={ inputValue }
            handleChange={ handleChange }
            setDisplayForm={ setDisplayForm }
            setRegisterList={ setRegisterList }
            registerList={ registerList }
        />
        : <button onClick={ handleClick }>Cadastrar nova senha</button> }
      {
      registerList.length !== 0
        ? (
          <div>
            <h2>Senhas cadastradas</h2>
            <RegisterList
              onChange={ handleChecked }
              checked={ checked }
              handleClear={ handleClear }
              registerList={ registerList }
            />
          </div>
        )
        : <h2>Nenhuma senha cadastrada</h2>
}
    </div>
  );
}

export default App;
