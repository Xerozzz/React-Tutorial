import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    { id: 1, text:"Wash Dishes", done: false},
    { id: 2, text:"Test Task", done: false},
    { id: 3, text:"Wash Bowls", done: false},
  ]

  return (
    <div className = "App">
      <h1>Todo List</h1>

      <TodoList todos={todos}/>
    </div>
  );
}

function TodoList({todos}){
  return(
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

function AddTodo(){
  return(
    <form>
      <input placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
