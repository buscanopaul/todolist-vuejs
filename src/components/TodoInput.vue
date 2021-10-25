<template>
    <div class="row">
        <input v-model="todoText" class="col form-control mx-2" type="text" />
        <button @click="addTodo(todoText)" class="btn btn-primary">Add </button>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            todoText: ""
        };
    },
    methods: {
        ...mapActions(['addTodo']),
        addTodo() {
            this.addTodo({
                title: this.todoText
            });
        }
    }
};
</script>

<style scoped>

</style>
