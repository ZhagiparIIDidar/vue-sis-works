import { ref, watch } from 'vue'

/** Реактивное значение, автоматически синхронизируемое с localStorage. */
export function useLocalStorage(key, initial) {
  const read = () => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  }

  const data = ref(read())

  watch(
    data,
    (value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch {
        /* хранилище недоступно или переполнено */
      }
    },
    { deep: true }
  )

  return data
}
