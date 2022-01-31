<script>
    export let todo;
</script>

<li class="todo {todo.completed ? 'completed' : ''}">
    <div class="content">
        <div class="checkbox">
            <input
                type="checkbox"
                name="todo"
                id="todo"
                bind:checked={todo.completed}
            />
        </div>

        <div class="title">
            <span>{todo.title}</span>
        </div>

        <div class="actions">
            <button><span class="material-icons-outlined">edit</span></button>
            <button>x</button>
        </div>
    </div>

    <div class="description">
        <span>{todo.description}</span>
    </div>
</li>
