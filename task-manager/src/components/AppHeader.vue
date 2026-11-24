<script setup>
import { CheckSquareOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <a-layout-header class="app-header">
    <CheckSquareOutlined class="logo" />
    <span class="title">Task Manager</span>
  </a-layout-header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  color: #fff;
  font-size: 24px;
}
.title {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
</style>
