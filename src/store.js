import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = { listaTodo: [], loading: false };

const actions = {
  addListTodoAction({ state, commit }, todoItem) {
    state.loading = true;
    todoItem.id = Math.random();
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("addTodoMutation", todoItem);
        commit("setLoading", false);
        resolve(todoItem);
      }, 200);
    });
  },
  checkTodoItemAction({ commit }, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = state.listaTodo.indexOf(value);
        const checked = !state.listaTodo[index].checked;
        let data = { index: index, checked: checked };
        commit("checkTodoItemMutation", data);
        resolve(value);
      }, 200);
    });
  },
  removerTodoAction({ commit }, todoItem) {
    return new Promise((resolve) => {
      setTimeout(() => {
        state.listaTodo.splice(state.listaTodo.indexOf(todoItem), 1);
        commit("removeTodoMutation", state.listaTodo);
        resolve(todoItem);
      }, 200);
    });
  },
  removerTudo({commit}) {
    commit("removeAll");
  },
};

const mutations = {
  addTodoMutation(state, payload) {
    state.listaTodo.push(payload);
  },
  removeTodoMutation(state, payload) {
    state.listaTodo = payload;
  },
  checkTodoItemMutation(state, value) {
    state.listaTodo[value.index].checked = value.checked;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  allDone(state) {
    state.listaTodo.map((x) => (x.checked = true));
  },
  desmarcarTodos(state) {
    state.listaTodo.map((x) => (x.checked = false));
  },
  removeAll(state) {
    state.listaTodo = state.listaTodo.filter(x => !x.checked)
    
  },
};

const getters = {
  unchecked(state) {
    var teste = state.listaTodo.filter((x) => !x.checked);
    return teste;
  },
  checked() {
    var teste = state.listaTodo.filter((x) => x.checked);
    return teste;
  },
};

const store = new Vuex.Store({ state, getters, actions, mutations });

export default store;
