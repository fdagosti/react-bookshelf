import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Book from "./Book";

class MainPage extends Component {

    render() {

        const {books, onMoveBook} = this.props

        const {currentlyReading, wantToRead, read} = {
            currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
            wantToRead: books.filter(book => book.shelf === "wantToRead"),
            read: books.filter(book => book.shelf === "read")
        }

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map(book => (
                                        <li key={book.id}><Book book={book} onMoveBook={onMoveBook}/></li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map(book => (
                                        <li key={book.id}><Book book={book} onMoveBook={onMoveBook}/></li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map(book => (
                                        <li key={book.id}><Book book={book} onMoveBook={onMoveBook}/></li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to={process.env.PUBLIC_URL + "/search"}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainPage