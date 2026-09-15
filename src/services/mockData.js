/**
 * Имитация backend-данных (mock API).
 * Реального бэкенда пока нет — эти объекты замещают ответы сервера.
 * Экспортируются как обычные массивы (не ref/reactive), чтобы их можно
 * было использовать где угодно: в компонентах через ref()/reactive(),
 * в Pinia-сторах, в тестах и т.д.
 *
 * Пример использования в компоненте:
 *   import { ref } from 'vue';
 *   import { products } from '@/mockData.js';
 *   const productList = ref(products);
 */

export const categories = [
    {id: 1, name: 'Электроника'},
    {id: 2, name: 'Периферия'},
    {id: 3, name: 'Мебель'},
];

export const products = [
    {id: 1, name: 'Laptop', price: 500000, inStock: true, categoryId: 1},
    {id: 2, name: 'Phone', price: 300000, inStock: false, categoryId: 1},
    {id: 3, name: 'Keyboard', price: 30000, inStock: true, categoryId: 2},
    {id: 4, name: 'Mouse', price: 12000, inStock: true, categoryId: 2},
    {id: 5, name: 'Monitor', price: 150000, inStock: false, categoryId: 1},
    {id: 6, name: 'Office Chair', price: 85000, inStock: true, categoryId: 3},
];

export const users = [
    {id: 1, name: 'Айдар Сериков', email: 'aidar.serikov@example.com', role: 'admin'},
    {id: 2, name: 'Мария Иванова', email: 'maria.ivanova@example.com', role: 'customer'},
    {id: 3, name: 'Данияр Ахметов', email: 'daniyar.akhmetov@example.com', role: 'customer'},
];

export const orders = [
    {id: 1, userId: 2, productIds: [1, 3], total: 530000, status: 'completed'},
    {id: 2, userId: 3, productIds: [4], total: 12000, status: 'pending'},
    {id: 3, userId: 2, productIds: [5, 6], total: 235000, status: 'cancelled'},
];

export const tasks = [
    {id: 1, description: 'Сделать дизайн главной страницы', done: true},
    {id: 2, description: 'Настроить роутинг', done: false},
    {id: 3, description: 'Подключить Pinia', done: false},
];
