import dayjs from 'dayjs'
import type { Task } from '@/types/task'

export function isOverdue(task: Task): boolean {
  return (
    task.status !== 'done' &&
    !!task.dueDate &&
    dayjs(task.dueDate).endOf('day').isBefore(dayjs())
  )
}

export function generateId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}
