import React from 'react'
import './button.style.scss'

const ButtonPage = ({ trueSelected, falseSelected }) => (

    <div className='nutton-page'>
        <button onClick={trueSelected}> True</button>
        <button onClick={falseSelected}> False</button>
    </div>
)

export default ButtonPage