import React from 'react'

const ButtonPage = ({selectedAnswer}) => (

    <div className='button-page'>
        <button onClick={()=>selectedAnswer(true)}> True</button>
        <button onClick={()=>selectedAnswer(false)}> False</button>
    </div>
);

export default ButtonPage;