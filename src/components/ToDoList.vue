<script setup>
import {ref, reactive, computed} from 'vue';

/* ==========================================================
   TO-DO LIST
   (в будущем можно вынести в components/TodoList.vue)
   ========================================================== */
let tasks = ref([]);
let task = ref('');
let task_id = ref('');
let nextId = 1;
let showTasks = ref(true);

function addTask() {
  if (task.value) {
    tasks.value.push({id: nextId, description: task.value});
    nextId++;
    task.value = '';
  }
}

function removeTask(tid) {
  const id = +tid;
  if (tasks.value.some((task) => task.id === id)) {
    console.log(id, 'deleted');
    tasks.value = tasks.value.filter((task) => task.id !== id);
    return;
  }
  console.log('no task found', id);
  console.log(tasks);
}

function show_tasks() {
  showTasks.value = !showTasks.value;
}

</script>

<template>
  <!-- ===================== TO-DO LIST ===================== -->
  <div class="to-do">
    <button @click="show_tasks">
      {{ showTasks ? 'close to-do' : 'show to-do' }}
    </button>
    <br/>

    <div class="to-do-sec stack">
      <ul class="list-surface" v-show="showTasks">
        <li v-for="task of tasks" :key="task.id">
          {{ task.id }} - {{ task.description }}
        </li>
      </ul>

      <div class="row">
        <input type="text" placeholder="text your task here ...)" v-model="task"/>
        <button @click="addTask()">add task</button>
      </div>

      <div class="row">
        <input
            type="text"
            placeholder="enter task id you want to delete ...)"
            v-model="task_id"
        />
        <button @click="removeTask(task_id)">remove task</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row input {
  flex: 1;
}
</style>