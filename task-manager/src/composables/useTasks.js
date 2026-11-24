import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/taskStore'
import { useNotification } from './useNotification'

/** CRUD-логика задач + уведомления. */
export function useTasks() {
  const store = useTaskStore()
  const { tasks, totalCount, doneCount, overdueCount } = storeToRefs(store)
  const notify = useNotification()

  const createTask = (payload) => {
    store.addTask(payload)
    notify.success('Задача создана')
  }

  const editTask = (id, payload) => {
    store.updateTask(id, payload)
    notify.success('Задача обновлена')
  }

  const removeTask = (id) => {
    store.deleteTask(id)
    notify.success('Задача удалена')
  }

  const changeStatus = (id, status) => {
    store.changeStatus(id, status)
  }

  return {
    tasks,
    totalCount,
    doneCount,
    overdueCount,
    createTask,
    editTask,
    removeTask,
    changeStatus
  }
}
