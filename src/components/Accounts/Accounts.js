
function Accounts({
  accountsList,
  selectedAccountsManagerId,
  accountsManagersMap
}) {

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Account Manager</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {accountsList.map(account => {
          return (
            <tr 
              key={account.id}
              className={
                `${account.accountManager === selectedAccountsManagerId ? 'marked-row' : ''}
                ${account.status === 'closed' ? 'disabled-row' : ''}
                `}>
              <td>
                {account.id}
              </td>
              <td>
                {account.name}
              </td>
              <td>
                {accountsManagersMap[account.accountManager].name}
              </td>
              <td>
                {account.status}
              </td>
            </tr>)
        })}
      </tbody>

    </table>
  );
}

export default Accounts;
