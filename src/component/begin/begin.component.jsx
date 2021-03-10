import React from 'react'
import { Redirect } from "react-router-dom"
import './begin.style.scss'
import ButtonPage from '../button/button.component'


class BeginGame extends React.Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            current: 0,
            answers: []
        }
    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then(response => response.json())

            .then(booleans => this.setState({ questions: booleans.results }))
    }


    render() {

        if (this.state.questions.length === 0) return <div>loading...</div>

        if (this.state.current === this.state.questions.length) {

            return <Redirect
                to={{
                    pathname: "/result",
                    state: { questions: this.state.questions, answers: this.state.answers }
                }}
            />
        }

        const trueSelected = () => {
            const answers = this.state.answers;
            answers.push(true);
            let current = this.state.current;
            current = current + 1;
            this.setState({ answers, current });
        }


        const falseSelected = () => {
            const answers = this.state.answers;
            answers.push(false);

            let current = this.state.current;
            current = current + 1;


            this.setState({ answers, current });

        }

        const questions = this.state.questions[this.state.current]


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

export default BeginGame