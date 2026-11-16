import { ref, watch, type Ref } from 'vue'

/** Реактивное значение, автоматически синхронизируемое с localStorage. */
export function useLocalStorage<T>(key: string, initial: T): Ref<T> {
  const read = (): T => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : initial
    } catch {
      return initial
    }
  }

  const data = ref(read()) as Ref<T>

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
