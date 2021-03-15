import React from 'react';

const ResultList = ({question, answer})=>{
  const { correct_answer } = question;
  let got_it_right = false;

  if (correct_answer === 'True' && answer === true) got_it_right = true;
  if (correct_answer === 'False' && answer === false) got_it_right = true;

  return  (
    <div>
        <p>{question.question}</p>
        <h5>{got_it_right ? "Passed" : "Failed"}</h5>
    </div>
  )
}

export default ResultList;