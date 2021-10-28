<template>
    <div class="row">
        <input @change="todoTextChange" v-bind:value="todoText" class="mw-80 col form-control mx-2" type="text" />
        <button @click="addTodoI" class="mw-20 btn btn-primary">Add </button>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
    data() {
        return {
            todoText: ""
        };
    },
    methods: {
        ...mapActions(['addTodo']),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        addTodoI() {
            this.addTodo({
                id: v1(),
                title: this.todoText,
                complete: false
            });
            this.todoText = "";
        }
    }
};
</script>

<style scoped>
.mw-80 {
    max-width: 80%;
}
.mw-20 {
    max-width: 20%;
}
</style>
