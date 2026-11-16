import { computed, reactive, ref, type Ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { Task, TaskPayload } from '@/types/task'

const defaultState = (): TaskPayload => ({
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  dueDate: null
})

/** Состояние формы задачи, валидация, заполнение при редактировании. */
export function useTaskForm(task: Ref<Task | null>) {
  const formRef = ref<FormInstance>()
  const formState = reactive<TaskPayload>(defaultState())

  const rules: Record<string, Rule[]> = {
    title: [
      { required: true, whitespace: true, message: 'Введите название задачи' },
      { max: 100, message: 'Не более 100 символов' }
    ],
    status: [{ required: true, message: 'Выберите статус' }],
    priority: [{ required: true, message: 'Выберите приоритет' }]
  }

  const isEditing = computed(() => task.value !== null)

  const resetForm = () => {
    Object.assign(formState, defaultState())
    formRef.value?.clearValidate()
  }

  const fillForm = (t: Task) => {
    Object.assign(formState, {
      title: t.title,
      description: t.description,
      status: t.status,
      priority: t.priority,
      dueDate: t.dueDate
    })
  }

  /** Валидирует форму и возвращает готовые данные (или бросает ошибку валидации). */
  const validate = async (): Promise<TaskPayload> => {
    await formRef.value?.validate()
    return {
      ...formState,
      title: formState.title.trim(),
      description: formState.description.trim()
    }
  }

  return { formRef, formState, rules, isEditing, resetForm, fillForm, validate }
}
