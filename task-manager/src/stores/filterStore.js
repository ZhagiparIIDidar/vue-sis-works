import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filters', () => {
  const searchQuery = ref('')
  const statusFilter = ref('all')
  const priorityFilter = ref('all')
  const sortBy = ref('createdAt')
  const sortOrder = ref('desc')

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
