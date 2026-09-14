<script setup>
import {ref} from 'vue';

const value = "products";

const inStockText = 'inStock';
const stockText = 'stock';
let showDataFlag = ref(false);
let showNavPanel = ref(true);

const products = [
  {id: 1, name: "Laptop", price: 500000, inStock: true},
  {id: 2, name: "Phone", price: 300000, inStock: false},
  {id: 3, name: "Keyboard", price: 30000, inStock: true}
]

function show_products() {
  showDataFlag.value = !showDataFlag.value;
}

function show_nav_panel() {
  showNavPanel.value = !showNavPanel.value;
}

// onMounted(() => {
//   console.log("hello from App.vue onMounted")
//   my_app()
// })
</script>

<template>
  <header>
    <div class="header-container">
      <button @click="show_nav_panel">Войти</button>

      <nav v-show="showNavPanel">
        <a href="/">Главная</a>
        <a href="/products">Товары</a>
        <a href="/about">О нас</a>
      </nav>
    </div>
  </header>

  <h1>{{ value }}</h1>
  <button @click="show_products">{{ value }}</button>

  <ul v-if="showDataFlag">
    <li v-for="product in products"
        :key="product.id">
      <p v-if="product.inStock">
        {{ product.name }} - {{ product.price }} - {{ inStockText }}
      </p>
      <p v-else>
        {{ product.name }} - {{ product.price }} - {{ stockText }}
      </p>
    </li>
  </ul>

</template>
/*
Products

Laptop — 500000 ₸ — In stock
Phone — 300000 ₸ — Out of stock
Keyboard — 30000 ₸ — In stock
*/

<style scoped>
.header-container {

  display: flex;
  align-items: center;
  gap: 10px;
}

nav {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 25px;
  background: #333;
}

nav a {
  color: white;
  text-decoration: none;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
