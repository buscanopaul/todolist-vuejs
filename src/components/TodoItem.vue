<template>
      <th scope="row">1</th>
      <td>{{todo.title}}</td>
      <td><button class="btn btn-warning">Edit</button> <button class="btn btn-danger">Delete</button></td>
</template>

<script>

export default {
    props: {
        todo: {
        }
    }
};
</script>

<style scoped>

</style>
