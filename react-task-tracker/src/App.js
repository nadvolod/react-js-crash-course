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

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No tasks')}
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
