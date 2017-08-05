import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class MainPage extends Component {

    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        }
    }

    componentDidMount(){
        this.getAllBooks();
    }

    getAllBooks= () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books: {
                currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
                wantToRead: books.filter(book => book.shelf === "wantToRead"),
                read: books.filter(book => book.shelf === "read")
            }})
        })
    }

    moveBook = (book, category)=>{
        BooksAPI.update(book, category).then(books =>{
            this.getAllBooks()
        })

    }

    render() {

        const {books} = this.state
        const onMoveBook = this.moveBook

        const {currentlyReading, wantToRead, read} = books

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