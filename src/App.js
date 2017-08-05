import React from 'react'
import './App.css'
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import {Route} from "react-router-dom";


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route
          exact path={process.env.PUBLIC_URL + "/"} render={() => (
            <MainPage/>
        )}
        />

        <Route
          path={process.env.PUBLIC_URL + "/search"} render={() => (
            <SearchPage/>
        )}
        />

      </div>
    )
  }
}

export default BooksApp
