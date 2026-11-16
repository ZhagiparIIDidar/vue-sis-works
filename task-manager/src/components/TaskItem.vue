<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons-vue'
import { useTasks } from '@/composables/useTasks'
import { isOverdue } from '@/utils/task'
import {
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  type Task,
  type TaskStatus
} from '@/types/task'

const props = defineProps<{ task: Task }>()
const emit = defineEmits<{ (e: 'edit', task: Task): void }>()

const { removeTask, changeStatus } = useTasks()

const priority = computed(() =>
  PRIORITY_OPTIONS.find((p) => p.value === props.task.priority)
)
const overdue = computed(() => isOverdue(props.task))
const dueLabel = computed(() =>
  props.task.dueDate ? dayjs(props.task.dueDate).format('DD.MM.YYYY') : ''
)
</script>

<template>
  <a-card size="small" class="task-card">
    <div class="task-row">
      <div class="task-main">
        <div class="task-title" :class="{ done: task.status === 'done' }">
          {{ task.title }}
        </div>
        <div v-if="task.description" class="task-desc">{{ task.description }}</div>
        <a-space wrap>
          <a-tag :color="priority?.color">{{ priority?.label }}</a-tag>
          <a-tag v-if="task.dueDate" :color="overdue ? 'red' : 'blue'">
            <CalendarOutlined /> {{ dueLabel }}
            <template v-if="overdue"> · просрочено</template>
          </a-tag>
        </a-space>
      </div>

      <a-space class="task-actions" wrap>
        <a-select
          :value="task.status"
          :options="STATUS_OPTIONS"
          style="width: 150px"
          @change="(v: any) => changeStatus(task.id, v as TaskStatus)"
        />
        <a-button type="text" @click="emit('edit', task)">
          <template #icon><EditOutlined /></template>
        </a-button>
        <a-popconfirm
          title="Удалить задачу?"
          ok-text="Да"
          cancel-text="Нет"
          @confirm="removeTask(task.id)"
        >
          <a-button type="text" danger>
            <template #icon><DeleteOutlined /></template>
          </a-button>
        </a-popconfirm>
      </a-space>
    </div>
  </a-card>
</template>

<style scoped>
.task-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.task-main {
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.task-title {
  font-size: 16px;
  font-weight: 600;
}
.task-title.done {
  text-decoration: line-through;
  color: #8c8c8c;
}
.task-desc {
  color: #595959;
  white-space: pre-wrap;
}
</style>
