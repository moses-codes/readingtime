import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/navbar'
import ManualEntry from './components/ManualEntry'

import Search from "./components/Search"


function App() {


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
