import { useState, useEffect } from 'react'
import './App.css'
import axios from './axios'

import Navbar from './components/navbar'
import ManualEntry from './components/ManualEntry'

import Search from "./components/Search"


function App() {


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

      <Search />
      <ManualEntry />

    </div>
  )
}

export default App
