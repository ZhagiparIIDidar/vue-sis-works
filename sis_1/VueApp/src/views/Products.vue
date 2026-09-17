<script setup>
import {ref, reactive, computed} from 'vue';
import {products as InitialProducts} from "@/services/mockData.js";

/* ==========================================================
   PRODUCTS
   (в будущем можно вынести в components/ProductList.vue)
   ========================================================== */
const inStockText = 'inStock';
const stockText = 'stock';

let showDataFlag = ref(false);

const products = reactive([...InitialProducts]);

const countOfInStockProduct = computed(() =>
        console.log(products)
    // products.filter((product) => product.inStock).length
);

function show_products() {
  showDataFlag.value = !showDataFlag.value;
}


</script>

<template>


  <!-- ===================== PRODUCTS ===================== -->
  <div class="products">
    <button @click="show_products">
      {{ showDataFlag ? 'close products' : 'open products' }}
    </button>

    <div class="product-grid" v-if="showDataFlag">
      <div class="product-card" v-for="product in products" :key="product.id">
        <p class="product-card__name">{{ product.name }}</p>
        <p class="product-card__price">{{ product.price }} ₸</p>
        <span
            class="product-card__status"
            :class="product.inStock ? 'product-card__status--in-stock' : 'product-card__status--out-of-stock'"
        >
      {{ product.inStock ? inStockText : stockText }}
    </span>
      </div>
    </div>

    <!--    <ol v-if="showDataFlag">-->
    <!--      <li v-for="product in products" :key="product.id">-->
    <!--        <div v-if="product.inStock">-->
    <!--          {{ product.name }} - {{ product.price }} - {{ inStockText }}-->
    <!--        </div>-->
    <!--        <div v-else>-->
    <!--          {{ product.name }} - {{ product.price }} - {{ stockText }}-->
    <!--        </div>-->
    <!--      </li>-->
    <!--    </ol>-->
  </div>

  <hr/>
  <h3>{{ countOfInStockProduct }}</h3>
  <hr/>


</template>

<style scoped>

.product-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-3);
}

.product-card__name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
}

.product-card__price {
  font-size: 1rem;
  color: var(--ink);
}

.product-card__status {
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 2px var(--space-2);
  border-radius: 999px;
}

.product-card__status--in-stock {
  color: var(--success);
  background: var(--success-soft);
}

.product-card__status--out-of-stock {
  color: var(--danger);
  background: var(--danger-soft);
}

/* сетка для списка карточек */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-3);
}

</style>