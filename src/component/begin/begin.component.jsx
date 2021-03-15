import React from 'react'
import { Redirect } from "react-router-dom"
import './begin.style.scss'
import ButtonPage from '../button/button.component'
import { connect } from 'react-redux'
import { setQuizQuestion } from '../redux/quiz/quiz.action'
import { setCorrectAnswer, currentQuestion } from '../redux/quiz/quiz.action'




class BeginGame extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         questions: [],
    //         current: 0,
    //         answers: []
    //     }
    // }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then(response => response.json())

            .then(booleans => this.props.setQuizQuestion(booleans.results))
    }



    render() {
        const { quiz } = this.props
        console.log(quiz);

        if (quiz.questions.length === 0) return <div>loading...</div>

        if (quiz.current === quiz.questions.length) {

            this.props.currentQuestion(0);
            this.props.setCorrectAnswer([]);

            return <Redirect
                to={{
                    pathname: "/result",
                    state: { questions: quiz.questions, answers: quiz.answers }
                }}
            />
        }

        const trueSelected = () => {
            const answers = quiz.answers;
            answers.push(true);
            const next = quiz.current + 1;

            this.props.setCorrectAnswer(answers);
            this.props.currentQuestion(next);
        }


        const falseSelected = () => {
            const answers = quiz.answers;
            answers.push(false);
            const next = quiz.current + 1;

            this.props.setCorrectAnswer(answers);
            this.props.currentQuestion(next);
        }

        const questions = quiz.questions[quiz.current]


        return (
            <div className='begin-game'>
                <h1> Quiz Screen </h1>
                <span>Begin Quiz</span>
                <div className='parent'>
                    <>
                        <h1>{questions.category}</h1>
                        <p className="p">{questions.question}</p>
                    </>
                </div>
                <ButtonPage trueSelected={trueSelected} falseSelected={falseSelected} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    setQuizQuestion: question => dispatch(setQuizQuestion(question)),
    setCorrectAnswer: answers => dispatch(setCorrectAnswer(answers)),
    currentQuestion: current => dispatch(currentQuestion(current)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BeginGame)