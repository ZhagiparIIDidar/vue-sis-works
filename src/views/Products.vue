<script setup>
const products = defineProps({products})
</script>

<template>
  <h1>Products</h1>

  <ol>
    <li v-for="prod in products" :key="prod.id">
      {{ prod.id }} - {{ prod.name }}
    </li>
  </ol>
</template>

<style scoped>

</style>