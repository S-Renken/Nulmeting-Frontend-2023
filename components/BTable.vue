<template>
  <table id="myTable" class="display table" width="100%">
    <thead>
      <th>id</th>
      <th>assignee</th>
      <th>description</th>
      <th>dueDateTime</th>
    </thead>
    <tbody>
      <tr v-for="todo in cnt.todoList">
        <td> {{ todo.id }} </td>
        <td> {{ todo.assignee }} </td>
        <td> {{ todo.description }} </td>
        <td> {{ todo.dueDateTime }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

const cnt = useCounter();

</script>