<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in allTTodos" :key="todo.id">
                    <TodoItem :todo="todo" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import TodoItem from '@/components/TodoItem';
import { mapGetters } from 'vuex';

export default {
    components: {
        TodoItem
    },
    computed: {
        ...mapGetters(['allTTodos', 'completed'])
    }
};
</script>

<style scoped>

</style>
