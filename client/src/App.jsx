import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import supabase from './src/supabaseClient'

import './App.css'

import Navbar from './components/navbar'
import AddBooks from './components/AddBooks'


function App() {

  const data = async () => {
    await supabase
      .from('readingTime')
      .select()
  }

  console.log('kijiji')
  console.log(data)

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
