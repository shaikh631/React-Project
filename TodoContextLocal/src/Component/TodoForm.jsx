import React,{useState} from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodo();

    const add = (e)=>{
        e.preventDefault()

        if(!todo) return 
        addTodo({todo , completed : false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                className="flex-1 border-2 border-gray-600 rounded-xl px-4 py-3 outline-none duration-300 bg-gray-800/50 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-gray-700/50 backdrop-blur-sm"
            />
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

