import React, {useEffect} from 'react';

import TodoList from './Component/TodoList';
import Context from './context';
import AddTodo from './Component/AddTodo';
import Loader from './Loader';

function Application() {
  let [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
    })
  }, [])

  function toggleTodo (id) {
    setTodos(todos = todos.map(todo => {
      if(todo.id === id)
      {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="container">
        <h1 style={{marginTop: "0"}}>Simple React Application</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {loading && <Loader></Loader>}
        {todos.length ? 
        (<TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : (
          loading ? null : <p>There is no todos anymore</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default Application;