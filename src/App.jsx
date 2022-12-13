import { useState, useEffect } from 'react'
import './App.css'
import axios from './axios'


function App() {
  const [data, setData] = useState('')

  // Define a state variable called "inputValue"
  const [inputValue, setInputValue] = useState("");

  // Define a function to handle change events on the input
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value)

  };


  // function handleSubmit(event) {
  //   console.log('search for ' + inputValue)
  useEffect(() => {
    axios.get("").then(res => {
      console.log(res.data)
      setData(() => res.data.numFound)
    })
  }, [])

  //   event.prefaultDefault()
  // }

  return (
    <div className="App">
      <h1 className='text-3xl font-bold mb-5'>ReadingTime</h1>
      <form>
        <label>
          <input className='border-solid border-2 border-indigo-600 rounded-md pl-5' type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input className='' type='submit' value='submit' />
      </form>
      <div className="card">
        <p>
          Booksearch placeholder
        </p>
        <p>
          {data} results found.
        </p>
      </div>
    </div>
  )
}

export default App
