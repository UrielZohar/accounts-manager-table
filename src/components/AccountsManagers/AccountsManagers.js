import { useSelector, useDispatch } from 'react-redux'
import './AccountsManagers.scss';

function AccountsManagers() {
  const dispatch = useDispatch()
  const accountsManagersList = useSelector(state => state.accountsManagersList)
  const selectedAccountsManagerId = useSelector(state => state.selectedAccountsManagerId)
  const accountsManagersMarkedMap = useSelector(state => state.accountsManagersMarkedMap)
  const onRowClickHandler = (selectedAccountsManagerId) => {
    dispatch({
      type: 'ACCOUNTS_MANAGER_CLICKED',
      data: { selectedAccountsManagerId }
    })
  }
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
            <tr 
              key={employee.id}
              onClick={() => {
                onRowClickHandler(employee.id);
              }}
              className={
                `${(selectedAccountsManagerId === employee.id) ? 'selected-row' : ''}
                ${accountsManagersMarkedMap[employee.id] ? 'marked-row' : ''}`
              }>
              <td>
                {employee.id}
              </td>
              <td>
                {employee.name}
              </td>
              <td>
                {employee.directManagerName}
              </td>
            </tr>)
        })}
      </tbody>

    </table>
  );
}

export default AccountsManagers;
