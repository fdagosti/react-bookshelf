import React, {Component} from 'react'

class Book extends Component {
    render() {

        const {book, onMoveBook} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    {book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>}
                    <div className="book-shelf-changer">
                        <select
                            defaultValue={book.shelf}
                            onChange={e => {onMoveBook(book, e.target.value)}}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.map(author => (
                    <div key={author} className="book-authors">{author}</div>
                ))}

            </div>
        )
    }
}

export default Book


