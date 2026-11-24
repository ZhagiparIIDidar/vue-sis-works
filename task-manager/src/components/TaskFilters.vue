<script setup>
import { ClearOutlined } from '@ant-design/icons-vue'
import { useTaskFilters } from '@/composables/useTaskFilters'
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '@/constants/task'

const {
  searchQuery,
  statusFilter,
  priorityFilter,
  sortBy,
  sortOrder,
  resetFilters
} = useTaskFilters()

const statusOptions = [{ value: 'all', label: 'Все статусы' }, ...STATUS_OPTIONS]
const priorityOptions = [{ value: 'all', label: 'Все приоритеты' }, ...PRIORITY_OPTIONS]
const sortByOptions = [
  { value: 'createdAt', label: 'По дате создания' },
  { value: 'dueDate', label: 'По сроку' },
  { value: 'priority', label: 'По приоритету' }
]
const sortOrderOptions = [
  { value: 'asc', label: 'По возрастанию' },
  { value: 'desc', label: 'По убыванию' }
]
</script>

<template>
  <div class="filters">
    <a-input-search
      v-model:value="searchQuery"
      placeholder="Поиск по названию"
      allow-clear
    />
    <a-row :gutter="[8, 8]">
      <a-col :xs="12" :md="6">
        <a-select v-model:value="statusFilter" :options="statusOptions" class="full" />
      </a-col>
      <a-col :xs="12" :md="6">
        <a-select
          v-model:value="priorityFilter"
          :options="priorityOptions"
          class="full"
        />
      </a-col>
      <a-col :xs="12" :md="5">
        <a-select v-model:value="sortBy" :options="sortByOptions" class="full" />
      </a-col>
      <a-col :xs="12" :md="5">
        <a-select v-model:value="sortOrder" :options="sortOrderOptions" class="full" />
      </a-col>
      <a-col :xs="24" :md="2">
        <a-tooltip title="Сбросить фильтры">
          <a-button class="full" @click="resetFilters">
            <template #icon><ClearOutlined /></template>
          </a-button>
        </a-tooltip>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
.full {
  width: 100%;
}
</style>
