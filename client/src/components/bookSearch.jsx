import { React, useState, useEffect } from "react";

export default function bookSearch(bookshelf) {

    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])
    //set setBooks localStorage


    function addBook(bookInfo) {
        console.log(bookInfo)
        setBooks(() => {
            return [...books, bookInfo]
        })
        console.log(books)
    }
    //any time the page loads, the useEffect will run
    //check to see if localStorage has an array w books in it; set the array to 'books' state; otherwise.... initialize etc.

    //try conditional: if (localStorage) { update the array }else{ initialize []}
    useEffect(() => {
        if (localStorage.getItem('books') === null) {
            setBooks(() => [])
            localStorage.setItem('books', JSON.stringify(books))
        } else {
            localStorage.setItem('books', JSON.stringify(books))
        }
    }, [books])

    const searchResults = bookshelf.bookshelf
        .slice(0, 10)
        .map(book => {

            let bookInfo = {
                title: `${book.title.split(' ').length > 6 ? book.title.split(' ').slice(0, 6).join(' ') + '...' : book.title}`,
                author: `${book.author_name ? book.author_name[0] : ''}`,
                cover: book.cover_i,
                numPages: book.number_of_pages_median,
            }

            return (
                <div className="card card-side bg-base-100 shadow-lg mt-5 pt-0 bookCard">

                    <figure className="w-1/4"><img src={
                        bookInfo.cover ? `https://covers.openlibrary.org/b/ID/${bookInfo.cover}-L.jpg` : "book-placeholder.png"
                    } alt="Movie" /></figure>
                    <div className="w-3/4 card-body">
                        <h2 className="card-title">{bookInfo.title}</h2>
                        <h4>{bookInfo.author}</h4>
                        <h4>{bookInfo.numPages} p.</h4>
                        <div className="card-actions justify-end mt-16">
                            <button className="btn btn-primary" onClick={() => addBook(bookInfo)}>Add Book</button>
                        </div>
                    </div>
                </div>
            )
        })

    return (
        <div>
            <div className="shelf">
                {searchResults}
            </div>
        </div>
    )
}