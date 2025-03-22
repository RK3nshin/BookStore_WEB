import React from 'react';
import "./HighlightsBook.css"
import Card from "./Card"


export default function HighlightsBook({ title, bookList }) {

    const renderBookList = (list) => {
        return list.map((book, index) => (
            <Card key={index} book={book} />
        ));
    };
    


    return (
        <div className='cards-best'>
            <h2>{title}</h2>
            <div className="grid-container">
                {renderBookList(bookList)}
            </div>
        </div>
    );
}
