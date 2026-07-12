import { useEffect, useState } from "react";
import type { Todo } from "./type/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState(1);
    const [darkMode, setDarkMode] = useState(() => {
        //برای اینکه بعد از رفرش شدن،تم عوض نشه
        const saved = localStorage.getItem("darkMode");
        return saved === "true";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    const handleAdd = (text: string) => {
        if (text.trim() === "") return;

        const newTodo: Todo = {
            id: nextId,
            text: text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setNextId(nextId + 1);
    };

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-200 via-indigo-300 to-purple-400 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 p-6 transition-colors duration-500">
            <div className="w-full max-w-md flex flex-col gap-6">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="self-end p-3 rounded-full bg-white/70 dark:bg-slate-800 text-slate-800 dark:text-yellow-300 shadow-md hover:scale-110 transition-all text-xl"
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>

                {/* Card 1: Add new task */}
                <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700 transition-colors duration-500">
                    <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-300 mb-6">
                        My Todo List
                    </h1>

                    <TodoInput onAdd={handleAdd} />
                </div>

                {/* Card 2: Task list */}
                <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700 transition-colors duration-500">
                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-100 mb-4 flex items-center justify-between">
                        <span>My Tasks</span>

                        <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-200 text-xs px-2.5 py-1 rounded-full font-semibold ml-3">
                            {todos.length} tasks incomplete
                        </span>
                    </h2>

                    {todos.length === 0 ? (
                        <div className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm">
                            No tasks remained... All done
                        </div>
                    ) : (
                        <TodoList todos={todos} onDelete={handleDelete} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
