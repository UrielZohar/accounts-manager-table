//import logo from './logo.svg';
import './AccountsManagers.scss';
import { useState } from 'react';


function AccountsManagers({ 
  accountsManagersList,
  accountsManagersMap,
  onSelectRowHadler
}) {

  const [selectedAccountsManagerId, setSelectedAccountsManagerId] = useState();
  return (
    <table id="accountManagers">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {accountsManagersList.map(employee => {
          return (
            <tr key={employee.id}
              onClick={() => {
                setSelectedAccountsManagerId(employee.id);
                onSelectRowHadler(employee.id);
              }}
              className={
                `${(selectedAccountsManagerId === employee.id) ? 'selected-row' : ''} 
                ${(accountsManagersMap[selectedAccountsManagerId]?.employeesList?.indexOf(employee.id) > -1) ? 'marked-row' : ''}`
              }
            >
              <td>
                {employee.id}
              </td>
              <td>
                {employee.name}
              </td>
              <td>
                {accountsManagersMap[employee.directManager]?.name}
              </td>
            </tr>)
        })}
      </tbody>

    </table>
  );
}

export default AccountsManagers;
