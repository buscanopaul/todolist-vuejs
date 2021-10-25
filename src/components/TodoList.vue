<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </tbody>
        </table>
    </div>
</template>

<script>

import TodoItem from '@/components/TodoItem';

export default {
    components: {
        TodoItem
    }
};
</script>

<style scoped>

</style>
