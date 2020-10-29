// import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import AccountsManagers from './components/AccountsManagers/AccountsManagers';
import Accounts from './components/Accounts/Accounts';
import accounts from './dataCenter/accounts';
import accountMamagersData from './dataCenter/accountsManagers';
import * as utils from './utils/utils';

function App() {

  const [accountsManagersMap, setAcountsManagersMap] = useState({});
  const  [accountsManagersList, setAccountsManagersList] = useState([]);
  const  [accountsList, setAccountsList] = useState([]);
  const  [selectedAccountsManagerId, setSelectedAccountsManagerId] = useState();

  useEffect(() => {
    let _acountsManagersMap = utils.createAccountsManagersMap(accountMamagersData);
    utils.addEmployeesUnderaccountsManagers(_acountsManagersMap, accountMamagersData);
    console.log(_acountsManagersMap);
    setAcountsManagersMap(_acountsManagersMap);
    setAccountsManagersList(accountMamagersData);
    setAccountsList(accounts);
  }, []);
  return (
    <>
      <AccountsManagers 
        accountsManagersMap={accountsManagersMap}
        accountsManagersList={accountsManagersList}
        onSelectRowHadler={(accountsManagerId) => {
          return setSelectedAccountsManagerId(accountsManagerId)
        }}>
      </AccountsManagers>
    
      <Accounts 
        accountsList={accountsList}
        accountsManagersMap={accountsManagersMap}
        selectedAccountsManagerId={selectedAccountsManagerId}>
      </Accounts>
    </>

  );
}

export default App;
