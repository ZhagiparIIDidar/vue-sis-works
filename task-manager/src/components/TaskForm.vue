<script setup lang="ts">
import { toRef, watch } from 'vue'
import { useTaskForm } from '@/composables/useTaskForm'
import { useTasks } from '@/composables/useTasks'
import { PRIORITY_OPTIONS, STATUS_OPTIONS, type Task } from '@/types/task'

const props = defineProps<{ open: boolean; task: Task | null }>()
const emit = defineEmits<{ (e: 'update:open', value: boolean): void }>()

const { createTask, editTask } = useTasks()
const { formRef, formState, rules, isEditing, resetForm, fillForm, validate } =
  useTaskForm(toRef(props, 'task'))

watch(
  () => props.open,
  (open) => {
    if (!open) return
    if (props.task) fillForm(props.task)
    else resetForm()
  }
)

const close = () => emit('update:open', false)

const submit = async () => {
  try {
    const payload = await validate()
    if (props.task) editTask(props.task.id, payload)
    else createTask(payload)
    close()
  } catch {
    /* ошибки валидации отображаются в форме */
  }
}
</script>

<template>
  <a-modal
    :open="open"
    :title="isEditing ? 'Редактировать задачу' : 'Новая задача'"
    :ok-text="isEditing ? 'Сохранить' : 'Создать'"
    cancel-text="Отмена"
    @ok="submit"
    @cancel="close"
  >
    <a-form ref="formRef" :model="formState" :rules="rules" layout="vertical">
      <a-form-item label="Название" name="title">
        <a-input v-model:value="formState.title" placeholder="Что нужно сделать?" />
      </a-form-item>

      <a-form-item label="Описание" name="description">
        <a-textarea v-model:value="formState.description" :rows="3" />
      </a-form-item>

      <a-row :gutter="12">
        <a-col :span="12">
          <a-form-item label="Статус" name="status">
            <a-select v-model:value="formState.status" :options="STATUS_OPTIONS" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Приоритет" name="priority">
            <a-select v-model:value="formState.priority" :options="PRIORITY_OPTIONS" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item label="Срок выполнения" name="dueDate">
        <a-date-picker
          v-model:value="formState.dueDate"
          value-format="YYYY-MM-DD"
          format="DD.MM.YYYY"
          style="width: 100%"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
