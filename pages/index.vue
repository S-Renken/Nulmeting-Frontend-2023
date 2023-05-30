<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h1>Welkom bij de Levarne Nulmeting</h1>
        <hr>
        <p>
          <NuxtLink to="/todo">Todo-list</NuxtLink>
          <br>
          <NuxtLink to="/about">Over ons</NuxtLink>
        </p>
        <LevButton @clicked="cnt.increment">Count me! </LevButton>
        <h2>{{ cnt.count }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const cnt = useCounter()

</script>