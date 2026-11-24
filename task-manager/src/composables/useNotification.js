import { message } from 'ant-design-vue'

export function useNotification() {
  return {
    success: (text) => message.success(text),
    error: (text) => message.error(text),
    info: (text) => message.info(text)
  }
}
