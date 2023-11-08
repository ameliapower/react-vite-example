import React, { useState } from 'react'
import Card from './components/Card'
import logo from './logo.svg'
import './App.css'

const ThemeContext = React.createContext('light')

function App() {
  const [count, setCount] = useState(0)

  const content = ["Lorem ipsum dolor sit amet.", "This is another sentence."]
  return (
    <ThemeContext.Provider value="light">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Card header="Example Card" body={content}/>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
