# My Bookshelves

This is an application that will let you store a book reading list.

## Getting Started
The application is a standard React app done with Create-react-app.
Just type the following line to both install it and launch it:

```
npm install
npm start
```

After the app is started, you can visit http://localhost:3000 to interact with the app

## Usage
You have basically two screens on the app:
* **Main Page**, which is also the default page which lists your personal books and categorize them into 3 bookshelves: _Currently Reading_, _Want To Read_ and _Read_
* **Search Page**, which allows you to search for any book in the backend and add any of these books on one of your shelves

### Code specificities
The code is made to run on GitHub Pages. Because of that, the app will not run on the host root, but instead will have a url in the form http://username.github.io/react-bookshelf/

This means that each link that moves from page to page using React-router will need to take that into consideration, like the following code:

```jsx
<div className="open-search">
    <Link to={process.env.PUBLIC_URL + "/search"}>Add a book</Link>
</div>
```

If you try to run the app on Github Pages, you will not be able to directly access the search page through a url, because GitHub will display a 404 page like [mentioned in this link](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing)

## Made to learn React

The main goal of this app is to learn React through the Udacity nanodegree class

### Backend
Backend is provided by Udacity through the `BooksAPI.js` file, which means that this app is purely the frontend code.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Licensing

This application is released under the [MIT License](https://opensource.org/licenses/MIT)
