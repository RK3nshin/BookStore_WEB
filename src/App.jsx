import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ListNavgation from './components/Listnavigation'
import "./App.css"
import menino from './assets/menino.png'
import { FiSearch } from "react-icons/fi";


import HighlightsBook from './components/HighlightsBook'
import SliderBooks from './components/SliderBooks'



export default function App() {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Você pesquisou por: ${search}`);
  }
  const bookData = {
    title: "O Senhor dos Anéis",
    url: "https://m.media-amazon.com/images/I/81hCVEC0ExL._UF894,1000_QL80_.jpg",
    description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quisquam, fugit dolore, quis aut porro facilis nostrum et earum molestiae cum similique. Fugit nam animi nihil sint, exercitationem dolore nostrum?",
    price: "R$ 50,00",
    rating: 4.5,
    author: 'J. R. R. Tolkien',
    votes: 10875
  };
  const bookData2 = {
    title: "Use a Cabeça Java",
    url: "https://m.media-amazon.com/images/I/610D1O8WWOL._SY385_.jpg",
    description: "“Use a Cabeça Java” é uma experiência completa de aprendizado em Java e programação orientada a objetos. Com este livro, você aprenderá a linguagem Java de um jeito único, que ultrapassa os manuais de instruções, ajudando-o a se tornar um programador excelente",
    price: "R$ 150,00",
    rating: 4.5,
    author: 'Kathy Sierra, Bert Bates , Trisha Gee',
    votes: 1025
  };


  const listbook = [bookData, bookData2, bookData, bookData2]
  const listbook2 = [bookData, bookData2, bookData, bookData2, bookData2, bookData, bookData2, bookData2, bookData, bookData2]


  return (
    <div>
      <header>
        <Navbar />
        <div className="presentation">

          <div className="main-container">
            <div className="title">
              <h2> read and add <br /> your insight</h2>
              <br />
              <p>find your favorite book and read it here for free</p>
            </div>
            <div id="search-container">
              <from id='froms' onSubmit={handleSearch}>
                <button type="submit"><FiSearch /></button>

                <input
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search Book' />
              </from>
            </div>
          </div>
          <div className="img-container">
            <img src={menino} />
          </div>
        </div>
      </header>
      <main>
        <ListNavgation />
        <section className="recommended">
          <div className="principal">

            <HighlightsBook title="Recommended" bookList={listbook} />
            <SliderBooks title='Populer' bookList={listbook2} />

          </div>

          <div className="secundario">

            <HighlightsBook title="This new story" bookList={listbook} />
            <SliderBooks title='Which they like' bookList={listbook2} />

          </div>
        </section>


      </main>

      <footer>
        <div className="logo">
          <li><a href="#"> 2025 MYBOOK  </a></li>
        </div>
        <div className="items-footer">
          <ul>
            <li><a href="#"> Explorer</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}
