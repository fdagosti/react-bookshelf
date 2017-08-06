import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from "react-router-dom";
import Book from "./Book";

class SearchPage extends React.Component {

    state = {
        query: "",
        searchResult: []
    }

    updateQuery = (query) => {
        this.setState({query})
        BooksAPI.search(query, 10).then((result) => {
            this.setState({searchResult: (!result || result.error) ? [] : result})
        })
    }


    render() {

        const {query, searchResult} = this.state;

        const {myBooks, onMoveBook} = this.props


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={process.env.PUBLIC_URL + "/"}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query}
                               onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResult.map(book => {
                            const bookAlreadyInShelf = myBooks.find(b => b.id === book.id)
                            if (bookAlreadyInShelf) {
                                book.shelf = bookAlreadyInShelf.shelf
                            } else {
                                book.shelf = "none"
                            }
                            return (
                                <li key={book.id}><Book book={book} onMoveBook={onMoveBook}/></li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}


export default SearchPage