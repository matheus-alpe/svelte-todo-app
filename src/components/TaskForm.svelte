<script>
    import { todos } from '../store';
    import { onDestroy } from 'svelte';

    export let todoList;

    let addBtn;

    const unsubscribe = todos.subscribe((value) => {
        todoList = value;
    });

    const TODO_TEMPLATE = {
        title: '',
        description: '',
        completed: false,
    };

    let todo = Object.assign({}, TODO_TEMPLATE);

    const resetTodo = () => (todo = Object.assign({}, TODO_TEMPLATE));

    function pushToTodos(param) {
        todoList.push(todo);
        todos.set(todoList);
        removeFocus({ target: addBtn });
    }

    function removeFocus({ target }) {
        target.blur();
        resetTodo();
    }

    onDestroy(unsubscribe);
</script>

<form class="todo-form" action="#" on:submit|preventDefault={pushToTodos}>
    <div class="input-area">
        <div class="focus">
            <div class="input-container">
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="add a task"
                    class="title"
                    required
                    bind:value={todo.title}
                />
                <div class="description-container">
                    <textarea
                        name="description"
                        id="description"
                        class="description"
                        placeholder="add a description"
                        rows="3"
                        required
                        bind:value={todo.description}
                    />
                </div>
            </div>

            <div class="action-container">
                <button type="button" class="close" on:click={removeFocus}
                    >x</button
                >

                <button type="submit" class="add" bind:this={addBtn}>+</button>
            </div>
        </div>
    </div>
</form>
