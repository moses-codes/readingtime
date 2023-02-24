import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'

import Navbar from './components/navbar'
import AddBooks from './components/AddBooks'

import axios from 'axios';


function App() {

  function getQuote() {
    axios.get("http://localhost:3005/api/hello", { crossdomain: true }).then(response => {
      console.log(response)
    });
  }


  return (
    <BrowserRouter>

      {/* <button onClick={getQuote}>click</button> */}
      <div className="App">
        <Navbar />

        <Routes>

          <Route path='/search'
            element={
              <AddBooks />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
