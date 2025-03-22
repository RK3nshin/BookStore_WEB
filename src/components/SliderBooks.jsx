import React from 'react'
import RecommendedBooks from './RecommendedBooks';
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import "./SliderBooks.css"

export default function SliderBooks({ title, bookList }) {

    const controls = document.querySelectorAll('.control');
    const items = document.querySelectorAll('.item');
    const maxItems = items.length;
    let currentItem = 0;

    controls.forEach((control)=>{
        control.addEventListener("click",()=>{
            const isLeft =  control.classList.contains('arrowLeft');

            if(isLeft){
                currentItem-=1;
            }else{
                currentItem+=1;
            }

            if(currentItem >= maxItems){
                currentItem=0
            }
            if(currentItem <0){
                currentItem = maxItems-1
            }

            items.forEach(item => item.classList.remove('current-item'))
            items[currentItem].scrollIntoView({
                inline:"center",
                behavior:'smooth'
            })
            items[currentItem].classList.add('current-item')
        })
    } )
    











    const renderBookList = (list) => {
        return list.map((book, index) => (
            <RecommendedBooks key={index} book={book} />
        ));
    };




    return (
        <div>
            <h2 className='title'>{title}</h2>
            <div className="container">
            <button className='control arrowLeft' aria-label='Imagem Anterior '> <FaArrowAltCircleLeft/></button>
            <button className='control arrowRigth' aria-label='Próxima Imagem'> <FaArrowAltCircleRight/></button>
                <div className="gallery-wrapper">
                    <div className="gallery">
                        {renderBookList(bookList)}
                    </div>
                </div>
            </div>
        </div>
    )
}
