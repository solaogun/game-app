
import React from 'react'
import './result.style.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ResultPage = (props) => {
    const { questions, answers, current } = props;

    let result = 0;
    questions.forEach((question, index) => {
        const { correct_answer } = question;
        if (correct_answer === 'True' && answers[index] === true) result += 1;
        if (correct_answer === 'False' && answers[index] === false) result += 1;
    })

    return <div>
        <h1>Result Screen</h1>
        <div>
            <h2>Your Result : {result}</h2>
            {
                questions.map((question, index) => {
                    const answer = answers[index];
                    const { correct_answer } = question;
                    let got_it_right = false;

                    if (correct_answer === 'True' && answer === true) got_it_right = true;
                    if (correct_answer === 'False' && answer === false) got_it_right = true;

                    return <div>
                        <p>{question.question}</p>
                        <h5>{got_it_right ? "Passed" : "Failed"}</h5>
                    </div>

                })
            }
        </div>
        <Link to='/'> Play Again</Link>

    </div>

}

const mapStateToProps = ({ quiz: { questions, current, answers } }) => ({
    questions,
    current,
    answers
})


export default connect(mapStateToProps)(ResultPage)