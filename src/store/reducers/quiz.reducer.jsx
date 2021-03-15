import QuizActionType from '../constants/quiz.type'

const INITIAL_STATE = {
    questions: [],
    answers: []
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuizActionType.FETCH_QUIZ_QUESTIONS:
            return {
                ...state, questions: action.payload
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