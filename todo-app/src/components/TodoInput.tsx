import { useState } from "react";

type Props = {
    onAdd: (text: string) => void;
};

function TodoInput({ onAdd }: Props) {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            onAdd(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:ring-purple-900"
                placeholder="Write your task..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAdd();
                    }
                }}
            />

            <button
                onClick={handleAdd}
                className="px-4 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
                Add Task
            </button>
        </div>
    );
}

export default TodoInput;
