import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'

import Navbar from './components/navbar'
import AddBooks from './components/AddBooks'


function App() {


  return (
    <BrowserRouter>
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
