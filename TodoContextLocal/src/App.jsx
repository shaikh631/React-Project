import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context'
import { TodoForm, TodoItem } from './Component'

function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id:Date.now() , ...todo}, ...prev])
  }
  const updateTodo = (id , todo) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, ...todo} : prevTodo))
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem("todos" ,JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value = {{todos ,addTodo , updateTodo , deleteTodo , toggleComplete }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
                <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-2xl px-6 py-6 text-white bg-white/10 backdrop-blur-sm border border-white/20">
                    <h1 className="text-4xl font-extrabold text-center mb-10 mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Manage Your Todos</h1>
                    <div className="mb-6 text-center">
                        <p className="text-gray-300 text-sm">Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}</p>
                    </div>
                    <div className="mb-6">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="space-y-4">
                        {/*Loop and Add TodoItem here */}
                        {todos.length === 0 ? (
                          <p className="text-center text-gray-400 text-lg py-8">No todos yet. Add one above!</p>
                        ) : (
                          todos.map((todo) => (
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo} />
                            </div>
                          ))
                        )}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
