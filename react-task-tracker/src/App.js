import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
// useEffect allows us to do api calls
import { useState, useEffect } from 'react'

const tasksEndpoint = `http://localhost:5000/tasks`

// This is a function component that will render
function App() {
  // Setting the default state of showAddTask to false
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
    // the [] is an empty dependency array that's required for useEffect()
  }, [])

  const fetchTasks = async () => {
    const response = await fetch(tasksEndpoint)
    const data = await response.json()

    return data
  }

  const addTask = async (task) => {
    const response = await fetch(tasksEndpoint, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      // will turn JS object into a Json object
      body: JSON.stringify(task)
    })

    const data = await response.json()

    setTasks([...tasks, data])
  }
  

  // Delete a task
  // 'nfn' to create a const function with param
  const deleteTask = async (id) => {
    await fetch(`${tasksEndpoint}/${id}`, {
      method: 'DELETE'
    })
    
    // When we call deleteTask(), React will show the tasks that are not filtered out by id
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    //foreach task in our tasks, if the current task id is equal to the id that we're trying to set,
    // then take that task using the spread operator and add a reminder to it with the inverse of the reminder boolean
    // otherwise, just leave the task alone

    // Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  

  return (
    <div className="App">
      <Header 
      onAdd={()=> setShowAddTask(!showAddTask)}
      displayAddTask={showAddTask}
      />
      {/* if showAddTask them show the AddTask component, otherwise, do nothing */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 
      ('No tasks')}
    </div>
  );
}

// We can also create a class based component like this
// use shortcut `rcep`
// import React from 'react'

// export class App extends React.Component {
//   render() {
//     return (
//       <h1>Hello from a class</h1>
//     )
//   }
// }

export default App
