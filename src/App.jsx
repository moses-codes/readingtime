import { useState, useEffect } from 'react'
import './App.css'
import axios from './axios'

import BookShelf from './components/bookShelf'
import Navbar from './components/navbar'


function App() {
  const [data, setData] = useState({
    numFound: 0,
    docs: [],
  })

  // Define a state variable called "inputValue"
  const [inputValue, setInputValue] = useState("");

  const [searchValue, setSearchValue] = useState("");

  // Define a function to handle change events on the input
  const handleChange = (e) => {
    let input = e.target.value
    setInputValue(() => e.target.value)
    setSearchValue(() => input.trim().split(' ').join('+'));
  };

  async function handleSubmit(e) {

    try {
      e.preventDefault()
      const books = await axios({
        method: 'GET',
        url: `${searchValue}`,
      })
      // console.log(books.data)
      setData(() => books.data)

    } catch (err) {
      console.err(err)
    }
  }

  // function handleSubmit(event) {
  //   console.log('search for ' + inputValue)
  //   useEffect(() => {
  //     axios.get("").then(res => {
  //       console.log(res.data)
  //       setData(() => res.data.numFound)
  //     })
  //   }, [])
  // }


  return (
    <div className="App">
      <Navbar />

      <div className="w-full flex justify-center my-10">
        <button class="btn btn-outline mx-3">Search</button>
        <button class="btn btn-outline mx-3 ">Manual Entry</button>
      </div>

      <form
        onSubmit={handleSubmit}>
        <label>
          <input className='border-solid border-2 border-indigo-600 rounded-md pl-2 mt-3' type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input
          className='border-solid border-2 border-blue-600 rounded-md ml-5 px-2 ' type='submit' value='submit' />
      </form>

      <div className="card">
        <p>
          {data.numFound} results found.
        </p>
      </div>

      <BookShelf bookshelf={data.docs} />

    </div>
  )
}

export default App
