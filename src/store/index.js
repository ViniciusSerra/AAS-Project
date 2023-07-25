// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || [], // Inicializa o usuário com o valor do localStorage
    token: localStorage.getItem('user-token') || '', // Inicializa o token com o valor do localStorage
  },
  mutations: {
    setUser(state, userInfo) {
      state.user = userInfo;
      localStorage.setItem('user', JSON.stringify(userInfo)); // Armazena o usuário no localStorage quando ele é atualizado
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('user-token', token); // Armazena o token no localStorage quando ele é atualizado
    },
  },
  actions: {

  },
  modules: {

  },
});
