import { List } from './types';

type RegisterListProps = {
  registerList: List
};

function RegisterList({ registerList }: RegisterListProps) {
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
    </div>
  ));
}

export default RegisterList;
