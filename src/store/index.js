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
    },
    delete_todo(state,id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
  },
  actions: {
    addTodo({commit}, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({commit}, id) {
      commit('delete_todo', id);
    }
  },
  modules: {
  },
  getters: {
    allTodos: (state)=>state.todos,
  },
})
 