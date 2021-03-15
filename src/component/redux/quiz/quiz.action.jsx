import QuizActionType from './quiz.type'

export const setQuizQuestion = (questions) => ({
    type: QuizActionType.QUIZ_QUESTION,
    payload: questions
})

export const currentQuestion = (current) => ({
    type: QuizActionType.CURRENT_QUESTIONS,
    payload: current
})

export const setCorrectAnswer = (answers) => ({
    type: QuizActionType.ANSWERS_QUESTION,
    payload: answers
})