<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="product-card">

    <p class="product-card__name">{{ props.product.id }}</p>

    <p class="product-card__name">{{ props.product.name }}</p>

    <p class="product-card__name">{{ props.product.description }}</p>

  </div>
  <!--  <p class="product-card__name">{{ props.product }}</p>-->

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