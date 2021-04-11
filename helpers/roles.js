import {
  ADMIN_ROLE_NAME,
  OPERATOR_ROLE_NAME,
} from '~/constants/roles';

const getIsRoleFn = role_first => role_second => role_first === role_second;
const isAdminRole = getIsRoleFn(ADMIN_ROLE_NAME);
const isOperatorRole = getIsRoleFn(OPERATOR_ROLE_NAME);


export {
  isAdminRole,
  isOperatorRole,
};
