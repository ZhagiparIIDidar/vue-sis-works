export type TaskStatus = 'todo' | 'in-progress' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string | null // YYYY-MM-DD
  createdAt: string
  updatedAt: string
}

export type TaskPayload = Pick<
  Task,
  'title' | 'description' | 'status' | 'priority' | 'dueDate'
>

export type SortBy = 'createdAt' | 'dueDate' | 'priority'
export type SortOrder = 'asc' | 'desc'

export const STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: 'todo', label: 'К выполнению' },
  { value: 'in-progress', label: 'В работе' },
  { value: 'done', label: 'Выполнено' }
]

export const PRIORITY_OPTIONS: {
  value: TaskPriority
  label: string
  color: string
  weight: number
}[] = [
  { value: 'low', label: 'Низкий', color: 'green', weight: 1 },
  { value: 'medium', label: 'Средний', color: 'orange', weight: 2 },
  { value: 'high', label: 'Высокий', color: 'red', weight: 3 }
]
