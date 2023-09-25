import { InitialValueType, List } from './types';

type FormProps = {
  handleReset: () => void
  initiaValue: InitialValueType
  setInputValue: (inicial: InitialValueType) => void
  setDisplayForm: () => void
  setRegisterList: (list: List) => void,
  registerList: List,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: InitialValueType
};

function Form({
  setDisplayForm,
  inputValue, setRegisterList,
  registerList, handleChange, initiaValue, setInputValue, handleReset }: FormProps) {
  const { login, senha, serviceName, url } = inputValue;

  const handleRegisterClick = () => {
    setRegisterList([...registerList, inputValue]);
    setDisplayForm();
    handleReset();
  };

  const handleClear = () => setDisplayForm();

  const passwordLengthMin = senha.length > 8;
  const passwordLengthMax = senha.length < 16;
  const validateNumberAndLetter = /^(?=.*[0-9])(?=.*[a-z])/.test(senha);
  const validateEspecialCharacter = /(?=.*[!#@$%&])/.test(senha);

  const validatePassword = passwordLengthMin
  && passwordLengthMax && validateNumberAndLetter && validateEspecialCharacter;
  const validateInputs = serviceName === '' || login === '';

  const disable = validateInputs || !validatePassword;

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
