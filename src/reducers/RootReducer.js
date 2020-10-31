import * as utils from '../utils/utils';
import accountsManagersList from '../dataCenter/accountsManagers';
import accountsList from '../dataCenter/accounts';


const initialState = {
    accountsManagersList: [],
    accountsList: [],
    accountsManagersMarkedMap: {},
    selectedAccountsManagerId: null
}

let acountsManagersMap;

const reducer = (state = initialState, action) => {
	switch (action.type) {
        case 'INIT_DATA': {
            acountsManagersMap = utils.createAccountsManagersMap(accountsManagersList);
            utils.addEmployeesUnderaccountsManagers(acountsManagersMap, accountsManagersList);
            utils.addManagerNameAttribute(acountsManagersMap, accountsManagersList);
            utils.addAccountManagerNameAttribute(acountsManagersMap, accountsList);
            return {
                ...state,
                accountsManagersList,
                accountsList,
            }
        }

		case 'ACCOUNTS_MANAGER_CLICKED': {
            // mark all the employees under the clicked accounts manager
            let accountsManagersMarkedMap = {};
            acountsManagersMap[action.data.selectedAccountsManagerId]?.employeesList?.forEach(employeeId => {
                accountsManagersMarkedMap[employeeId] = true;
            })
			return {
                ...state,
                selectedAccountsManagerId: action.data.selectedAccountsManagerId,
                accountsManagersMarkedMap
            }
        }


		default: {
			return state;
		}
	}
}

export default reducer;