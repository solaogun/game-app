import React from 'react'
import './homepage.style.scss'
import { Link } from 'react-router-dom'

const HomePage = () => (
    <div className='home-page'>
        <h1> Welcome to the Trivia Challenge!</h1>


        <p className='p3'>Your will be presented with 10 true or false questions</p>


        <p className='p3'>Can you score 100%</p>

        <Link className='begin' to='Begin'>Begin</Link>


    </div>
)

export default HomePage