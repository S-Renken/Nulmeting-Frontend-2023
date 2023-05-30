<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h1>Welkom bij de Levarne Nulmeting</h1>
        <div>
          <NuxtLink to="/">Home</NuxtLink>
        </div>
        <br>
        <br>
        <LevButton @clicked="cnt.apiCall(); ">
          MAKE API CALL
        </LevButton>

        <br><br>
        <BTable></BTable>
        <br><br>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const cnt = useTodolist();

</script>