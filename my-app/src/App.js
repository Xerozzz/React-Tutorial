import logo from './logo.svg';
import './App.css';
import react from 'react'

function App() {
  const [todos, setTodos] = react.useState([
    { id: 1, text:"Wash Dishes", done: false},
    { id: 2, text:"Test Task", done: false},
    { id: 3, text:"Wash Bowls", done: false},
  ])

  return (
    <div className = "App">
      <h1 className="headers">Todo List</h1>
      <TodoList todos={todos} setTodos = {setTodos}/>
      <AddTodo setTodos = {setTodos}/>
    </div>
  );
}

function TodoList({todos, setTodos}){
  function handleToggleTodo(todo){
    const updatedTodos = todos.map((t) =>
    t.id === todo.id ? {...t, done: !t.done} : t
    )
    setTodos(updatedTodos)
  }

  if (!todos.length){
    return <p>No todos left!</p>
  }

  return(
    <ul>
      {todos.map(todo => (
        <li onDoubleClick = {() => handleToggleTodo(todo)} style = {{textDecoration: todo.done ? "line-through" : ""}} key={todo.id}>{todo.text}<DeleteTodo todo={todo} setTodos = {setTodos}/></li>
      ))}
    </ul>
  )
}

function DeleteTodo({todo, setTodos}){
  function handleDeleteTodo(){
    const confirmed = window.confirm("Do you want to delete this?")
    if (confirmed){
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id)
      })
    }
  }
  return(
    <span onClick={handleDeleteTodo} role="button" style = {{color:'red',fontWeight: 'bold',marginLeft:10,curosr:"pointer"}}>x</span>
  )
}

function AddTodo({ setTodos }){
  const inputRef = react.useRef()

  function handleAddTodo(event){
    event.preventDefault()
    const text = event.target.elements.addTodo.value
    const todo = {
      id : Math.random(),
      text,
      done:false
    }
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
    inputRef.current.value = ""
  }

  return(
    <form onSubmit = {handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;