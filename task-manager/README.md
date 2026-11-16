# Task Manager

Приложение для управления задачами на **Vue 3 + Pinia + Ant Design Vue**.

## Технологии

- Vue 3 (Composition API, `<script setup>`)
- TypeScript, Vite
- Pinia — хранение состояния (задачи и фильтры)
- Ant Design Vue 4
- Composables для всей логики компонентов

## Функциональность

- Создание, редактирование, удаление задач
- Поля: название, описание, приоритет, срок, статус
- Смена статуса: К выполнению → В работе → Выполнено
- Поиск по названию
- Фильтрация по статусу и приоритету
- Сортировка по дате создания, сроку, приоритету
- Подтверждение удаления, уведомления
- Сохранение данных в `localStorage`

## Запуск

```bash
npm install
npm run dev      # режим разработки
npm run build    # production-сборка
```

## Структура

```
src/
├── components/   AppHeader, TaskFilters, TaskList, TaskItem, TaskForm
├── composables/  useTasks, useTaskFilters, useTaskForm, useLocalStorage, useNotification
├── stores/       taskStore, filterStore (Pinia)
├── types/        task.ts
├── utils/        task.ts
└── views/        HomeView.vue
```

Компоненты не содержат бизнес-логики — они вызывают composables, а те работают со stores.
