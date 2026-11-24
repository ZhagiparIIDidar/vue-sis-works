import { computed, reactive, ref } from 'vue'

const defaultState = () => ({
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  dueDate: null
})

/** Состояние формы задачи, валидация, заполнение при редактировании. */
export function useTaskForm(task) {
  const formRef = ref()
  const formState = reactive(defaultState())

  const rules = {
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

  const fillForm = (t) => {
    Object.assign(formState, {
      title: t.title,
      description: t.description,
      status: t.status,
      priority: t.priority,
      dueDate: t.dueDate
    })
  }

  /** Валидирует форму и возвращает готовые данные (или бросает ошибку валидации). */
  const validate = async () => {
    await formRef.value?.validate()
    return {
      ...formState,
      title: formState.title.trim(),
      description: formState.description.trim()
    }
  }

  return { formRef, formState, rules, isEditing, resetForm, fillForm, validate }
}
