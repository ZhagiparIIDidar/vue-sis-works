import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SortBy, SortOrder, TaskPriority, TaskStatus } from '@/types/task'

export const useFilterStore = defineStore('filters', () => {
  const searchQuery = ref('')
  const statusFilter = ref<TaskStatus | 'all'>('all')
  const priorityFilter = ref<TaskPriority | 'all'>('all')
  const sortBy = ref<SortBy>('createdAt')
  const sortOrder = ref<SortOrder>('desc')

  function resetFilters() {
    searchQuery.value = ''
    statusFilter.value = 'all'
    priorityFilter.value = 'all'
    sortBy.value = 'createdAt'
    sortOrder.value = 'desc'
  }

  return {
    searchQuery,
    statusFilter,
    priorityFilter,
    sortBy,
    sortOrder,
    resetFilters
  }
})
