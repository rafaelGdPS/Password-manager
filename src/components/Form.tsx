import React, { useState } from 'react';
import { InitialValueType, List } from './types';

type FormProps = {
  setDisplayForm: (display: boolean) => void
  initialValue: InitialValueType;
  setRegisterList: (list: List) => void,
  registerList: List,
};

function Form({
  setDisplayForm, initialValue, setRegisterList, registerList }: FormProps) {
  const [inputValue, setInputValue] = useState(initialValue);
  const { login, senha, serviceName, url } = inputValue;

  const handleRegisterClick = () => {
    setDisplayForm(false);
    setRegisterList([...registerList, inputValue]);
  };

  const handleClear = () => setDisplayForm(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const passwordLengthMin = senha.length > 8;
  const passwordLengthMax = senha.length < 16;
  const validateNumberAndLetter = /^(?=.*[0-9])(?=.*[a-z])/.test(senha);
  const validateEspecialCharacter = /(?=.*[!#@$%&])/.test(senha);
  console.log(validateEspecialCharacter);

  const validatePassword = passwordLengthMin
  && passwordLengthMax && validateNumberAndLetter && validateEspecialCharacter;
  const validateInputs = serviceName === '' || login === '';
  console.log(validateInputs);

  const disable = validateInputs || !validatePassword;
  console.log(disable);

  return (

    <form action="">
      <label htmlFor="service">
        Nome do serviço
        <input
          type="text"
          id="service"
          name="serviceName"
          value={ serviceName }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          id="login"
          name="login"
          value={ login }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="senha"
          id="password"
          value={ senha }
          onChange={ handleChange }
          required
        />
        {passwordLengthMin
          ? <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
          : <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>}
        {passwordLengthMax
          ? <p className="valid-password-check">Possuir até 16 caracteres</p>
          : <p className="invalid-password-check">Possuir até 16 caracteres</p>}
        {validateNumberAndLetter
          ? <p className="valid-password-check">Possuir letras e números</p>
          : <p className="invalid-password-check">Possuir letras e números</p>}
        {validateEspecialCharacter
          ? <p className="valid-password-check">Possuir algum caractere especial</p>
          : <p className="invalid-password-check">Possuir algum caractere especial</p>}
      </label>
      <label htmlFor="url">
        URL
        <input
          type="text"
          id="url"
          name="url"
          value={ url }
          onChange={ handleChange }
          required
        />
      </label>
      <button disabled={ disable } onClick={ handleRegisterClick }>Cadastrar</button>
      <button onClick={ handleClear }>Cancelar</button>

    </form>
  );
}

export default Form;
