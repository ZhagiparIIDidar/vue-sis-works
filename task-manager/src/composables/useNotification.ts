import { message } from 'ant-design-vue'

export function useNotification() {
  return {
    success: (text: string) => message.success(text),
    error: (text: string) => message.error(text),
    info: (text: string) => message.info(text)
  }
}
