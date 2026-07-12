import type { Todo } from "../type/todo";
import TodoItem from "./TodoItem";

type Props = {
    todos: Todo[];
    onDelete: (id: number) => void;
};

function TodoList({ todos, onDelete }: Props) {
    return (
        <ul className="flex flex-col gap-3 max-h-75 overflow-y-auto pr-1">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </ul>
    );
}

export default TodoList;
