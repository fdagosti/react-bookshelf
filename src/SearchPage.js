import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from "react-router-dom";
import Book from "./Book";

class SearchPage extends React.Component {

    state = {
        query : "",
        searchResult : []
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
        BooksAPI.search(query, 10).then((result) => {
            this.setState({searchResult: (!result || result.error)? []:result})
        })
    }

    moveBook = (book, category)=>{
        BooksAPI.update(book, category).then(books =>{})
    }

    render(){

        const {query, searchResult} = this.state;


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
                        {searchResult.map(book => (
                            <li key={book.id}><Book book={book} onMoveBook={this.moveBook}/></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}


export default SearchPage