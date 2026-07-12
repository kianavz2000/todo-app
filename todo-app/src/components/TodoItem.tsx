import type { Todo } from "../type/todo";

type Props = {
    todo: Todo;
    onDelete: (id: number) => void;
};

function TodoItem({ todo, onDelete }: Props) {
    return (
        <li className="flex items-center justify-between bg-white dark:bg-slate-700/50 p-3.5 rounded-xl border border-gray-100 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200 group">
            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm break-all">
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="text-pink-500 hover:text-white bg-pink-100 hover:bg-pink-500 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer dark:bg-pink-700/20 dark:hover:bg-pink-600"
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
