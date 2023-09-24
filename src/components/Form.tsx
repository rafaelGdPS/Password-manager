function Form() {
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
        <button>Cancelar</button>
      </label>
    </form>
  );
}

export default Form;
