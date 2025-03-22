import React from 'react'
import "./Listnavigation.css"

export default function ListNavgation() {
    return (
        <section id='list-container'>
            <div id='main-list'>
                <h3>Book of Gener</h3>
                <ul id='genre'>
                    <li><a href='#'>All Genres</a></li>
                    <li><a href='#'>Business </a></li>
                    <li><a href='#'>Science </a></li>
                    <li><a href='#'>Fiction</a></li>
                    <li><a href='#'>Philosophy</a></li>
                    <li><a href='#'>Bioraphy</a></li>
                </ul>
                <h3>Recomendations</h3>
                <ul>
                    <li><a href='#'>Artist of the Month</a></li>
                    <li><a href='#'>Book of the Year</a></li>
                    <li><a href='#'>Top Genre</a></li>
                    <li><a href='#'>Trending</a></li>
                </ul>
            </div>

        </section>
    )
}
