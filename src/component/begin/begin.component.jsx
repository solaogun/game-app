import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, setCorrectAnswer} from '../../store/actions/quiz.action'
import Question from '../question/question.component';
import { Redirect } from "react-router-dom"
import ButtonPage from '../button/button.component'

const BeginGame = ()=> {
    const dispatch = useDispatch();
    // Local State to track current question
    const [current, setCurrent] = useState(0);
    const { questions, answers} = useSelector((state) => state.quiz);
    
    // gets all questions upon rendering 
    const fetchAllQuestions = useCallback(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);
    
    // noting user selections
    const selectedAnswer = (type) => {
        answers.push(type);
        const next = current + 1;

        dispatch(setCorrectAnswer(answers));
        setCurrent(next);
    }
    
    useEffect(() => {
       fetchAllQuestions();
    }, [fetchAllQuestions]);
    
    if (questions.length === 0) return <div>loading...</div>
    if (current === questions.length) {
        return <Redirect to={{ pathname: "/result", state: { questions, answers}}}/>
    }
    return (
            <div className='begin-game'>
                <h1> Quiz Screen </h1>
                <span>Begin Quiz</span>
                <Question questions={questions} current ={current}/>
                <ButtonPage selectAnswer={(type)=>selectedAnswer(type)}/>
            </div>
        );
}

export default BeginGame;