import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoItem({ todo }) {
    const [isTodoEditable , setIsTodoEditable] = useState(false)
    const [todoMsg , setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id ,{...todo , todo :todoMsg} )
        setIsTodoEditable(false)
    }
    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center border-2 rounded-xl px-4 py-3 gap-x-4 shadow-lg duration-300 text-white backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ${
                todo.completed ? "bg-gradient-to-r from-green-800/50 to-emerald-800/50 border-green-600" : "bg-gradient-to-r from-gray-800/50 to-slate-800/50 border-gray-600"
            } hover:shadow-xl`}
        >
            <input
                type="checkbox"
                className="cursor-pointer w-5 h-5 accent-green-400"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`flex-1 border-2 outline-none rounded-lg px-3 py-2 bg-transparent duration-300 ${
                    isTodoEditable ? "border-blue-400 bg-gray-700/50" : "border-transparent"
                } ${todo.completed ? "line-through text-gray-400" : "text-white"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-10 h-10 rounded-lg text-lg border-2 border-gray-500 justify-center items-center bg-gray-700 hover:bg-gray-600 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-10 h-10 rounded-lg text-lg border-2 border-red-500 justify-center items-center bg-red-900/50 hover:bg-red-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg text-red-400"
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
