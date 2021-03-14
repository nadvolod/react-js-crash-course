// useEffect allows us to do api calls
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

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
    <Router>
      <div className="App">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          displayAddTask={showAddTask}
        />
        {/* This will only be shown when we hit '/'.
        The 'exact' parameter is to make sure that the URL matches
        exactly and /* such as /about doesn't match the condition */}
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
        {/* /about will only show the component */}
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
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
