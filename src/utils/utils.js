/**
 * @param {List of accoumts managers} accountsManagersList
 * @return {map of accoumts managers}
 */
export const createAccountsManagersMap = (accountsManagersList) => {
    const accountsManagersMap = {};
    accountsManagersList.forEach(accountsManager => {
        accountsManagersMap[accountsManager.id] = accountsManager;
    });
    return accountsManagersMap;
}

/**
 * Update in the map for any accounts manager all the 
 * employees under him (at any depth)
 * @param {List of accoumts managers} accountsManagersList
 * @return {map of accoumts managers}
 */
export const addEmployeesUnderaccountsManagers = (accountsManagersMap, accountsManagersList) => {
    accountsManagersList.forEach(employee => {
        if (employee.directManager) {
            let managerId = employee.directManager;
            while (managerId) {
                if (accountsManagersMap[managerId].employeesList) {
                    accountsManagersMap[managerId].employeesList.push(employee.id);
                } else {
                    accountsManagersMap[managerId].employeesList = [employee.id];
                }
                // go recursivley to the above manager
                managerId = accountsManagersMap[managerId].directManager;
            }
        }
    })
}
