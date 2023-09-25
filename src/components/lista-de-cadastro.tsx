import { List } from './types';

type RegisterListProps = {
  registerList: List
  handleClear: (login: string) => void;
  checked: boolean
  onChange: () => void
};

function RegisterList({ registerList, handleClear, checked,
  onChange }: RegisterListProps) {
  return registerList.map(({ serviceName, login, url, senha }) => (
    <div key={ login }>
      <label htmlFor="check">Esconder senhas</label>
      <input
        type="checkbox"
        name="check"
        id="check"
        onChange={ onChange }
        checked={ checked }
      />
      <a href={ url }>{serviceName}</a>
      <p>
        Login:
        {' '}
        {login}
      </p>
      <p>
        Senha:
        {' '}
        {checked === true ? '******' : senha}
      </p>
      <button
        data-testid="remove-btn"
        onClick={ () => handleClear(login) }
      >
        Limpar

      </button>
    </div>
  ));
}

export default RegisterList;
