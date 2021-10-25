<template>
      <th scope="row">1</th>
      <td>{{todo.title}}</td>
      <td><button class="btn btn-warning">Edit</button> <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button></td>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        todo: {
        }
    },
    methods: {
        ...mapActions(['deleteTodo'])
    }
};
</script>

<style scoped>

</style>
