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
      headers: { 'Content-type': 'application/json' },
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

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`${tasksEndpoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  const fetchTask = async (id) => {
    const res = await fetch(`${tasksEndpoint}/${id}`)
    const data = await res.json()

    return data
  }


  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        displayAddTask={showAddTask}
      />
      {/* if showAddTask them show the AddTask component, otherwise, do nothing */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
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
