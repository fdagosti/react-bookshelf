import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import {Route} from "react-router-dom";


class BooksApp extends React.Component {
  state = {
    books: []
  }

    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    moveBook = (book, category)=>{
        console.log("move Book ",book)
        BooksAPI.update(book, category).then(b =>{
            console.log("server updated ",b)
            book.shelf = category;
            this.setState(state => ({books: state.books}))
        })

    }


  render() {
    return (
      <div className="app">
        <Route
          exact path={process.env.PUBLIC_URL + "/"} render={() => (
            <MainPage books={this.state.books} onMoveBook={this.moveBook}/>
        )}
        />

        <Route
          path={process.env.PUBLIC_URL + "/search"} component={SearchPage}
        />

      </div>
    )
  }
}

export default BooksApp
