import React from 'react';
  
import './Card.css';

import renderStars from './renderStars';



export default function BookCard({ book }) {
 

  return (
    <div className="card-container">
      <img src={book.url} alt={`Capa do livro ${book.title}`} /> 
      <div className='info'>
        <h3 className="title">{book.title}</h3>
        <p className='autor'> {book.autor}</p>
        <div id="rating" className="stars"> 
          {renderStars(book.rating)}   <p> {book.votes} votes</p>
        </div>
        <p className="description">{book.description}</p>
        <button className='btn-price'>{book.price}</button>
      </div>
     
       
  
    </div>
  );
}
