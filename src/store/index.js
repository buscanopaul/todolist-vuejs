import { createStore } from 'vuex'

export default createStore({
  state: {
    completed: true,
    ttodos: [],
    todos: [
    {
      id: 1,
      title: "One",
      complete: true,
    },
    {
      id: 2,
      title: "Two",
      complete: true,
    },
    {
      id: 3,
      title: "Three",
      complete: false,
    }
  ],
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      state.ttodos = state.todos;
    },
    delete_todo(state,id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      state.ttodos = state.todos;
    },
    update_todo(state,todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id)
      if(index != -1) {
        state.todos[index] = todo;
      }
    },
    change_complete(state) {
      state.ttodos = state.todos;
      state.completed = state.completed == true ? false : true;
      state.ttodos = state.ttodos.filter((t) => t.complete == state.completed);
    }
  },
  actions: {
    addTodo({commit}, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({commit}, id) {
      commit('delete_todo', id);
    },
    updateTodo({commit}, todo) {
      commit('update_todo', todo);
    },
    changeCompleted({ commit }) {
      commit('change_complete');
    }
  },
  modules: {
  },
  getters: {
    allTTodos: (state) => state.ttodos,
    allTodos: (state) => state.todos,
    completed: (state) => state.completed,
  },
})
 