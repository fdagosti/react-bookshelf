import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from "./MainPage";
import {Link} from "react-router-dom";
import Book from "./Book";

import escapeRegExp from "escape-string-regexp"

class SearchPage extends React.Component {

    state = {
        query : "",
        books : []
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
        BooksAPI.search(query, 10).then((result) => {
            this.setState({books: (!result || result.error)? []:result})
        })
    }

    render(){

        const {query, books} = this.state;
        const {onMoveBook} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={process.env.PUBLIC_URL + "/"}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}><Book book={book} onMoveBook={onMoveBook}/></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}


export default SearchPage