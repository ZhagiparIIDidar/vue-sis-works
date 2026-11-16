<script setup lang="ts">
import { ref } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import TaskFilters from '@/components/TaskFilters.vue'
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import { useTasks } from '@/composables/useTasks'
import { useTaskFilters } from '@/composables/useTaskFilters'
import type { Task } from '@/types/task'

const { totalCount, doneCount, overdueCount } = useTasks()
const { filteredTasks } = useTaskFilters()

const formOpen = ref(false)
const editingTask = ref<Task | null>(null)

const openCreate = () => {
  editingTask.value = null
  formOpen.value = true
}

const openEdit = (task: Task) => {
  editingTask.value = task
  formOpen.value = true
}
</script>

<template>
  <div>
    <div class="toolbar">
      <div class="summary">
        Всего: <b>{{ totalCount }}</b> · Выполнено: <b>{{ doneCount }}</b> ·
        Просрочено: <b>{{ overdueCount }}</b>
      </div>
      <a-button type="primary" @click="openCreate">
        <template #icon><PlusOutlined /></template>
        Добавить задачу
      </a-button>
    </div>

    <TaskFilters />
    <TaskList :tasks="filteredTasks" @edit="openEdit" />
    <TaskForm v-model:open="formOpen" :task="editingTask" />
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}
.summary {
  color: #595959;
}
</style>
