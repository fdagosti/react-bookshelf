import React from 'react'
import './App.css'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import {Route} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends React.Component {


    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    moveBook = (book, shelf) => {
        if (book.shelf !== shelf){
            BooksAPI.update(book, shelf).then(() => {
                this.setState((state) => {
                    const foundBook = state.books.find(b=>b.id === book.id);
                    if (foundBook){
                        foundBook.shelf = shelf
                    }else{
                        state.books.concat([book])
                    }
                })
            })
        }
    }

    render() {

        const {books} = this.state;


        return (
            <div className="app">
                <Route
                    exact path={process.env.PUBLIC_URL + "/"}
                    render={() => (<MainPage books={books} onMoveBook={this.moveBook}/>)}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/search"}
                    render={() => (<SearchPage myBooks={books} onMoveBook={this.moveBook}/>)}
                />
            </div>
        )
    }
}

export default BooksApp
