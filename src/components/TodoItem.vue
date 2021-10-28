<template>
    <td>
        <h5 v-if="!editing" :class="{ 'line-through': todo.complete == true }">{{todo.title}}</h5>
        <div v-else class="row">
            <div class="change">
                <input v-bind:value="todoText" @change="todoTextChange" type="text" class="col form-control" />
            </div>
           
            <div class="complete">
                <input :check="completed" class="col" @change="onCompleted" type="checkbox" />
                <label>Completed</label>
            </div> 
        </div>
    </td>
    <td><h5 v-if="!editing" :class="{ 'line-through': todo.complete == true }">{{todo.complete == true ? 'Completed' : 'To-do'}}</h5></td>
    <td><button @click="updateTodoI(todo)" class="btn btn-warning">{{editing ? 'Update' : 'Edit'}}</button> <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button></td>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        todo: {
        }
    },
    data() {
        return {
            todoText: '',
            editing: false,
            completed: false
        }
    },
    methods: {
        ...mapActions(['deleteTodo', 'updateTodo', 'changeCompleted']),
        onCompleted() {
            this.completed = this.completed == true ? false : true;
        },
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        updateTodoI(todo) {
            this.editing = this.editing == true ? false : true;
            if(this.editing) {
                this.todoText = todo.title;
                this.updateTodo(todo);
            } else {
                todo.title = this.todoText;
                todo.complete = this.completed;
                this.changeCompleted();
            }
        }
    }
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
