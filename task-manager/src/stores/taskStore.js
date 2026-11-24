import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { generateId, isOverdue } from '@/utils/task'

export const useTaskStore = defineStore('tasks', () => {
  // state (автоматически сохраняется в localStorage)
  const tasks = useLocalStorage('task-manager:tasks', [])

  // getters
  const todoTasks = computed(() => tasks.value.filter((t) => t.status === 'todo'))
  const inProgressTasks = computed(() =>
    tasks.value.filter((t) => t.status === 'in-progress')
  )
  const doneTasks = computed(() => tasks.value.filter((t) => t.status === 'done'))
  const overdueTasks = computed(() => tasks.value.filter(isOverdue))
  const totalCount = computed(() => tasks.value.length)
  const doneCount = computed(() => doneTasks.value.length)
  const overdueCount = computed(() => overdueTasks.value.length)

  // actions
  function addTask(payload) {
    const now = new Date().toISOString()
    tasks.value.unshift({
      id: generateId(),
      ...payload,
      createdAt: now,
      updatedAt: now
    })
  }

  function updateTask(id, payload) {
    const task = tasks.value.find((t) => t.id === id)
    if (!task) return
    Object.assign(task, payload, { updatedAt: new Date().toISOString() })
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  function changeStatus(id, status) {
    const task = tasks.value.find((t) => t.id === id)
    if (!task) return
    task.status = status
    task.updatedAt = new Date().toISOString()
  }

  return {
    tasks,
    todoTasks,
    inProgressTasks,
    doneTasks,
    overdueTasks,
    totalCount,
    doneCount,
    overdueCount,
    addTask,
    updateTask,
    deleteTask,
    changeStatus
  }
})
