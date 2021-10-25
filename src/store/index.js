import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
    {
      id: 1,
      title: "One"
    },
    {
      id: 2,
      title: "Two"
    },
    {
      id: 3,
      title: "Three"
    }
  ],
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(todo);
    },
  },
  actions: {
    addTodo({commit}, todo) {
      commit('add_todo', todo);
    }
  },
  modules: {
  },
  getters: {
    allTodos: (state)=>state.todos,
  },
})
 