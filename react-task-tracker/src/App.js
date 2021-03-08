import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

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
  console.log('delete', id)
}


  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
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
