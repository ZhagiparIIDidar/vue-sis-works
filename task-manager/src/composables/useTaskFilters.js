import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/taskStore'
import { useFilterStore } from '@/stores/filterStore'
import { PRIORITY_OPTIONS } from '@/constants/task'

const priorityWeight = (t) =>
  PRIORITY_OPTIONS.find((p) => p.value === t.priority)?.weight ?? 0

/** Фильтрация, поиск и сортировка списка задач. */
export function useTaskFilters() {
  const taskStore = useTaskStore()
  const filterStore = useFilterStore()
  const { tasks } = storeToRefs(taskStore)
  const { searchQuery, statusFilter, priorityFilter, sortBy, sortOrder } =
    storeToRefs(filterStore)

  const filteredTasks = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()

    const result = tasks.value.filter((t) => {
      if (query && !t.title.toLowerCase().includes(query)) return false
      if (statusFilter.value !== 'all' && t.status !== statusFilter.value) return false
      if (priorityFilter.value !== 'all' && t.priority !== priorityFilter.value)
        return false
      return true
    })

    const dir = sortOrder.value === 'asc' ? 1 : -1

    return result.sort((a, b) => {
      switch (sortBy.value) {
        case 'priority':
          return (priorityWeight(a) - priorityWeight(b)) * dir
        case 'dueDate': {
          // задачи без срока всегда в конце
          if (!a.dueDate && !b.dueDate) return 0
          if (!a.dueDate) return 1
          if (!b.dueDate) return -1
          return a.dueDate.localeCompare(b.dueDate) * dir
        }
        default:
          return a.createdAt.localeCompare(b.createdAt) * dir
      }
    })
  })

  return {
    searchQuery,
    statusFilter,
    priorityFilter,
    sortBy,
    sortOrder,
    filteredTasks,
    resetFilters: filterStore.resetFilters
  }
}
