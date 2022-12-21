import React, { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ManualEntry from './ManualEntry'
import Search from "./Search"


export default function AddBooks() {

    const [isSearch, setSearch] = React.useState('true')

    function toggleSearch(e) {
        setSearch(() => e.target.value)
        console.log(isSearch)
    }


    return (

        <div className="bookAdd">

            <div className="w-full flex justify-center my-10">
                <button
                    onClick={toggleSearch}
                    value={'true'}
                    className="btn btn-outline mx-3">Search</button>
                <button
                    onClick={toggleSearch}
                    value={'false'}
                    className="btn btn-outline mx-3">Manual Entry</button>
            </div>

            <div>
                <div>
                    {isSearch == 'true' ? <Search /> : <ManualEntry />}
                </div>
            </div>




        </div>
    )
}
