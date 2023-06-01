<template>
  <table id="myTable" class="display table" width="100%">
    <thead>
      <th>assignee</th>
      <th>description</th>
      <th>dueDateTime</th>
    </thead>
    <tbody>
      <tr v-for="todo in todos">
        <td> {{ todo.assignee }} </td>
        <td> {{ todo.description }} </td>
        <td> {{ todo.dueDateTime }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

const list = useTodolist();

const todos = computed(() => {
  return list.todoList;
})

</script>

<style lang="scss" scoped>
table {
  th {
    text-align: left;
  }
}
</style>