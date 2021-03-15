import React from 'react'

const ButtonPage = ({selectAnswer}) => (

    <div className='button-page'>
        <button onClick={()=>selectAnswer(true)}> True</button>
        <button onClick={()=>selectAnswer(false)}> False</button>
    </div>
);

export default ButtonPage;