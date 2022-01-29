<script>
	import TaskForm from './components/TaskForm.svelte';
	import ListTodos from './components/ListTodos.svelte';
	export let name;
</script>

<main class="dark">
	<h1>{name}</h1>

	<TaskForm />

	<ListTodos />
	
</main>