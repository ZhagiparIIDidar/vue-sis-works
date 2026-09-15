<script setup>
import {ref, reactive, computed} from 'vue';

/* ==========================================================
   NAV PANEL
   (в будущем можно вынести в components/NavPanel.vue)
   ========================================================== */
let showNavPanel = ref(true);

function show_nav_panel() {
  showNavPanel.value = !showNavPanel.value;
}

</script>

<template>
  <!-- ===================== NAV PANEL ===================== -->
  <header>
    <div class="header-container">
      <button @click="show_nav_panel">
        {{ showNavPanel ? 'close Panel' : 'open Panel' }}
      </button>

      <nav v-show="showNavPanel">
        <a href="/">Главная</a>
        <a href="/views/Products">Товары</a>
        <a href="/about">О нас</a>
      </nav>
    </div>
  </header>

</template>

<style scoped>

</style>