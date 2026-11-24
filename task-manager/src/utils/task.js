import dayjs from 'dayjs'

export function isOverdue(task) {
  return (
    task.status !== 'done' &&
    !!task.dueDate &&
    dayjs(task.dueDate).endOf('day').isBefore(dayjs())
  )
}

export function generateId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}
