import { List } from './types';

type RegisterListProps = {
  registerList: List
  handleClear: (login: string) => void;
};

function RegisterList({ registerList, handleClear }: RegisterListProps) {
  return registerList.map(({ serviceName, login, url, senha }) => (
    <div key={ login }>
      <a href={ url }>{serviceName}</a>
      <p>
        Login:
        {' '}
        {login}
      </p>
      <p>
        Senha:
        {' '}
        {senha}
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
