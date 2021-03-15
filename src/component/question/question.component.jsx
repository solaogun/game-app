import React from 'react';

const Question = ({questions, current})=>(
  <div className='parent'>
    <>
        <h1>{questions[current].category}</h1>
        <p className="p">{questions[current].question}</p>
    </>
</div>
);

export default Question;