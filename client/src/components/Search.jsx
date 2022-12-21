import { useState, useEffect } from 'react'
import BookSearch from './bookSearch'
import axios from '../axios'

export default function Search(e) {
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
    return (
        <div>
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

            <BookSearch bookshelf={data.docs} />
        </div>
    )
}