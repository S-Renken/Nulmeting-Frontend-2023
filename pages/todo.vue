<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h1>Welkom bij de Levarne Nulmeting</h1>
        <div>
          <NuxtLink to="/">Home</NuxtLink>
        </div>

        <p>
          <LevButton @clicked="todolist.apiCall">
            MAKE API CALL
          </LevButton>
        </p>

        <p>
          <BTable></BTable>
        </p>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const todolist = useTodolist();

</script>