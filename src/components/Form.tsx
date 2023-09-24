import { useState } from 'react';

type FormProps = {
  setDisplayForm: (display: boolean) => void
};

function Form({ setDisplayForm }: FormProps) {
  const handleClear = () => setDisplayForm(false);
  return (

    <form action="">
      <label htmlFor="service">
        Nome do serviço
        <input type="text" id="service" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" id="login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" id="url" />
        <button>Cadastrar</button>
        <button onClick={ handleClear }>Cancelar</button>

      </label>
    </form>
  );
}

export default Form;
