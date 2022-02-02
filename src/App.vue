<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	//import HelloWorld from './components/HelloWorld.vue'
	import {ref} from 'vue'

		const newTodo = ref('');
		const defaultData = [{
			done: false,
			content: 'Create vue.js todo app'
		}]
		const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
		const todos = ref(todosData);
		function addTodo () {
			if (newTodo.value) {
				todos.value.push({
					done: false,
					content: newTodo.value
				});
				newTodo.value = '';
			}
			saveData();
		}
		function doneTodo (todo) {
			todo.done = !todo.done
			saveData();
		}
		function removeTodo (index) {
			todos.value.splice(index, 1);
			saveData();
		}
		function saveData () {
			const storageData = JSON.stringify(todos.value);
			localStorage.setItem('todos', storageData);
		}



</script>

<template>
	<h1 class="text-start">ToDo App</h1>
	<h2>ToDo List</h2>
	<ul class="list-group p-2 mb-3">
		<li
			v-for="(todo, index) in todos"
			:key="index"
			class="list-group-item"
			:class="{ 'list-group-item-dark': todo.done }"
		>
			<input class="form-check-input float-start" type="checkbox" value="" v-model="todo.done">

			<span
				:class="{ done: todo.done }"
				@click="doneTodo(todo)"
			>{{ todo.content }}</span>
			<button @click="removeTodo(index)" class="btn btn-danger float-end">X</button>
		</li>
	</ul>
	<h4 v-if="todos.length === 0">Empty list.</h4>
	
	<form @submit.prevent="addTodo()">
		<div class="p-2 mb-3 text-start">

			<label for="newTodo" class="form-label">New ToDo </label>
			<div class="input-group p-2 mb-3 text-start">
				<input
					v-model="newTodo"
					name="newTodo"
					class="form-control"
					autocomplete="off"
				>
				<button class="btn btn-outline-primary">+</button>
			</div>
		</div>
		<div class="p-2  mb-3">

		</div>
	</form>

	
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.done {
	text-decoration: line-through;
}
</style>
