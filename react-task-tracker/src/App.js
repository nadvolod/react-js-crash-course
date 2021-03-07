import Header from './components/Header'
import Tasks from './components/Tasks'

// This is a function component that will render
function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
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
