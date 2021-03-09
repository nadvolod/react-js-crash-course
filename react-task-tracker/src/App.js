import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

// This is a function component that will render
function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'food',
        day: 'x',
        reminder: false
      },
      {
        id: 2,
        text: 'hello',
        day: 'x',
        reminder: false
      }
    ]
  )

  // Delete a task
  // 'nfn' to create a const function with param
  const deleteTask = (id) => {
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
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks')}
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
