import {
  isAdmin,
  isOperator,
} from '~/helpers/users';

export const state = () => ({
  auth: {},
  user:{ },
  synced: false,
});

export const mutations = {
  SET_AUTH: (state, obj) => state.auth = obj,
  SET_USER: (state, obj) => state.user = obj,
  SET_SYNCED: (state, bool) => state.synced = bool,
};

export const actions = {
  setAuth: ({commit}, obj) => commit('SET_AUTH', obj),
  setUser: ({ commit }, obj) => commit('SET_USER', obj),
  setSynced: ({commit}, bool) => commit('SET_SYNCED', bool),
  logout: ({dispatch}) => {
    dispatch('setAuth', {});
    dispatch('setUser', {});
    dispatch('setSynced', false)
  }
};

export const getters = {
  auth: state => state.auth,
  authenticated: state => !!state.auth.access_token,
  user: state => {
    const user = state.user;
    const roles_data = {
      isAdmin: isAdmin(user),
      isOperator: isOperator(user),
    };

    Object.assign(user, roles_data, isPrimaryCompany);
    const permissions = {
      users: user.isAdmin,
      services: {
        general_access: user.isOperator,
        read: user.isAdmin,
      }
    };
    Object.assign(user, {permissions});
    return user;
  },
  synced: state => state.synced,
};
