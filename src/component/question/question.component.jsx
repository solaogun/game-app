import React from 'react';

const Question = ({questions})=>(
  <div className='parent'>
    <>
        <h1>{questions.category}</h1>
        <p className="p">{questions.question}</p>
    </>
</div>
);

export default Question;