<script setup>
import {ref, reactive, computed} from 'vue';

const value = "products";
const inStockText = 'inStock';
const stockText = 'stock';
let showDataFlag = ref(false);
let showNavPanel = ref(true);
let tasks = reactive([]);
let task = ref('')
let task_id = ref('')
let name = ref('');
let nextId = 1;
let showTasks = ref(true);
const products = ref([
  {id: 1, name: "Laptop", price: 500000, inStock: true},
  {id: 2, name: "Phone", price: 300000, inStock: false},
  {id: 3, name: "Keyboard", price: 30000, inStock: true}
]);


let countOfInStockProduct = computed(() => {
  return products.value.filter((product) => product.inStock).length;
})

function show(name = '') {
  console.log(tasks.length);
}

function addTask() {
  if (task.value) {
    let new_task = task.value;
    tasks.push({id: nextId, 'description': new_task});
    nextId++;
    task.value = '';
  }
}

function removeTask(tid) {
  let id = +tid;
  if (tasks.some(task => task.id === id)) {
    console.log(id, 'deleted');
    tasks = tasks.filter(task => task.id !== id);
    return
  }
  console.log('no task found', id);
  console.log(tasks);
}

function show_tasks() {
  showTasks.value = !showTasks.value;
}

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
      <button @click="show_nav_panel">{{ showNavPanel ? 'close Panel' : 'open Panel' }}</button>

      <nav v-show="showNavPanel">
        <a href="/">Главная</a>
        <a href="/products">Товары</a>
        <a href="/about">О нас</a>
      </nav>
    </div>
  </header>

  <div class="products">
    <button @click="show_products">{{ showDataFlag ? 'close products' : 'open products' }}</button>

    <ol v-if="showDataFlag" style="background-color: aqua">
      <li v-for="product in products"
          :key="product.id">
        <p v-if="product.inStock">
          {{ product.name }} - {{ product.price }} - {{ inStockText }}
        </p>
        <p v-else>
          {{ product.name }} - {{ product.price }} - {{ stockText }}
        </p>
      </li>
    </ol>
  </div>

  <hr>
  <h3>{{ countOfInStockProduct }}</h3>
  <hr>

  <div class="to-do">
    <button @click="show_tasks">{{ showTasks ? 'close to-do' : 'show to-do' }}</button>
    <br>
    <ul v-show="showTasks" style="background-color: aqua">
      <p>tasks:</p>
      <li v-for="task of tasks" :key="task.id">
        {{ task.id }} - {{ task.description }}
      </li>
    </ul>

    <input type="text" placeholder="text your task here ...)" v-model="task">
    <button @click="addTask()">add task</button>

    <br>

    <input type="text" placeholder="enter task id you want to delete ...)" v-model="task_id">
    <button @click="removeTask(task_id)">remove task</button>
  </div>


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
