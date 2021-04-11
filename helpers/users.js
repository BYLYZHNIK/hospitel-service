import {
  isAdminRole,
  isOperatorRole,
} from './roles';


const getIsUserRole = roleCompareFn => user => roleCompareFn(user?.role_id);
const isAdmin = getIsUserRole(isAdminRole);
const isOperator = getIsUserRole(isOperatorRole);


export {
  isAdmin,
  isOperator,
};
