import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ResultList from './resultList.component'
import { getResult } from '../../resource/util/helpers';

const ResultPage = (props) => {
    const [result, setResult] = useState(0);
    const { questions, answers} = useSelector((state)=> state.quiz);

    useEffect(()=>{
        // getResult helper to calculate user score 
        const score = getResult(questions);
        setResult(score);
    });

    return <div>
        <h1>Result Screen</h1>
        <div>
            <h2>Your Result : {result}</h2>
            {
                questions.map((question, index) => (
                    <ul>
                        <li key={index}>
                            <ResultList answer={answers[index]} question={question}/>
                        </li>
                    </ul>
                ))
            }
        </div>
        <Link to='/'>Play Again</Link>
    </div>

}

export default ResultPage;