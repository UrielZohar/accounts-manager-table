import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.scss';
import AccountsManagers from './components/AccountsManagers/AccountsManagers';
import Accounts from './components/Accounts/Accounts';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'INIT_DATA' })
  }, []);
  return (
    <>
      <AccountsManagers>
      </AccountsManagers>
      <Accounts>
      </Accounts>
    </>
  );
}

export default App;
