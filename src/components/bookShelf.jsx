import { React, useState } from "react";

export default function bookShelf(bookshelf) {

    const searchResults = bookshelf.bookshelf.map(book => {
        let bookInfo = {
            title: book.title,
            author: book.author_name,
            isbn: book.isbn,
            numPages: book.number_of_pages_median
        }

        return (<li className="list-none">
            <h2 className="">{bookInfo.title}</h2>
            <h3 className="">{bookInfo.author}</h3>
            <h4 className="">{bookInfo.numPages}</h4>
        </li>)
    })

    return (
        <div>
            <div className="shelf">
                {searchResults}
            </div>
        </div>
    )
}