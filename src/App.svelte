<script>
	import ListTodos from './components/ListTodos.svelte';
	export let name;

	const todos = [
		{
			id: '61e16f0e8241ec78fe1f995f',
			title: 'Hello, world!',
			description: 'This is a sample task.',
			completed: false,
			created_at: '2022-01-14T12:39:42.018Z'
		},
		{
			id: '81e16f0e8241ec21ce1foad0',
			title: 'Task test',
			description: 'description to task test',
			completed: true,
			created_at: '2022-01-28T12:39:42.018Z'
		}
	];
</script>

<main>
	<h1>{name}</h1>

	<form action="#">
		<div class="main">
			<label for="title">Title:</label>
			<input type="text" name="title" id="title" placeholder="add a task">
			<div class="modal">
				<label for="description">Description:</label>
				<textarea name="description" id="description" rows="4"></textarea>
			</div>
		</div>
	</form>

	<ListTodos {todos}/>
	
</main>