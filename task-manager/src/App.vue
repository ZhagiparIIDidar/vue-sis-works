<script setup lang="ts">
import ruRU from 'ant-design-vue/es/locale/ru_RU'
import AppHeader from '@/components/AppHeader.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <a-config-provider :locale="ruRU">
    <a-layout class="app-layout">
      <AppHeader />
      <a-layout-content class="app-content">
        <HomeView />
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>

<style>
body {
  margin: 0;
}
.app-layout {
  min-height: 100vh;
}
.app-content {
  padding: 24px 16px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}
</style>
