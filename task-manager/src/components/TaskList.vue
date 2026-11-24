<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['edit'])
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
