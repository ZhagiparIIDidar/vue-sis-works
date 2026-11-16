import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/taskStore'
import { useNotification } from './useNotification'
import type { TaskPayload, TaskStatus } from '@/types/task'

/** CRUD-логика задач + уведомления. */
export function useTasks() {
  const store = useTaskStore()
  const { tasks, totalCount, doneCount, overdueCount } = storeToRefs(store)
  const notify = useNotification()

  const createTask = (payload: TaskPayload) => {
    store.addTask(payload)
    notify.success('Задача создана')
  }

  const editTask = (id: string, payload: TaskPayload) => {
    store.updateTask(id, payload)
    notify.success('Задача обновлена')
  }

  const removeTask = (id: string) => {
    store.deleteTask(id)
    notify.success('Задача удалена')
  }

  const changeStatus = (id: string, status: TaskStatus) => {
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
