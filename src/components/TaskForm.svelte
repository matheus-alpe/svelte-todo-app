<script>
    import { todos } from '../store'

    export let todoList;

    todos.subscribe(value => {
        todoList = value;
    })

    const TODO_TEMPLATE = {
		title: '',
		description: '',
		completed: false
	}

    let todo = Object.assign({}, TODO_TEMPLATE);

    function pushToTodos() {
		todoList.push(todo);
        todos.set(todoList);
		todo = Object.assign({}, TODO_TEMPLATE);
	}
</script>

<form class="todo-form" action="#" on:submit|preventDefault={pushToTodos}>
    <div>
        <input type="text" name="title" id="title" placeholder="add a task" bind:value={todo.title}>
        <div class="modal">
            <label for="description">Description:</label>
            <textarea name="description" id="description" rows="4" bind:value={todo.description}></textarea>
            <button>Add Todo</button>
        </div>
    </div>
</form>