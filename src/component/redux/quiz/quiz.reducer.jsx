import QuizActionType from './quiz.type'

const INITIAL_STATE = {
    questions: [],
    current: 0,
    answers: []
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuizActionType.QUIZ_QUESTION:
            return {
                ...state, questions: action.payload
            }


        case QuizActionType.CURRENT_QUESTIONS:
            return {
                ...state,
                current: action.payload
            }

        case QuizActionType.ANSWERS_QUESTION:
            return {
                ...state,
                answers: action.payload
            }
        default:
            return state
    }
}

export default quizReducer