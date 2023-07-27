// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || [],
    token: localStorage.getItem('user-token') || '',
    tabsAdmin:localStorage.getItem('tabsAdmin')
  },
  mutations: {
    setUser(state, userInfo) {
      state.user = userInfo;
      localStorage.setItem('user', JSON.stringify(userInfo));
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('user-token', token);
    },
    setTabAdmin(state,tabsAdmin){
      state.tabsAdmin = tabsAdmin
      localStorage.setItem("tabsAdmin",tabsAdmin)
    }

  },
  actions: {

  },
  modules: {

  },
});
