<script setup lang="ts">
import TaskItem from './TaskItem.vue'
import type { Task } from '@/types/task'

defineProps<{ tasks: Task[] }>()
const emit = defineEmits<{ (e: 'edit', task: Task): void }>()
</script>

<template>
  <div v-if="tasks.length" class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @edit="emit('edit', $event)"
    />
  </div>
  <a-empty v-else description="Задач не найдено" />
</template>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
