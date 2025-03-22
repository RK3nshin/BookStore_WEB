import React from 'react'

import renderStars from './renderStars';
import "./RecommendedBook.css"


export default function RecommendedBooks({book}) {
  return (
    <div className="container-book item current-item">
        <img src={book.url} alt={`Capa do livro  ${book.title}`}/>
        <p className='author'>{book.author}</p>
        <div>
        {renderStars(book.rating)} 
        </div>
        <p> {book.votes} votes</p>
    </div>
  )
}
