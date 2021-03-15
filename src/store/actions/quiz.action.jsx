import QuizActionType from '../constants/quiz.type'
import axios from "axios";
import { FETCH_QUESTIONS } from '../../resource/util/misc'

export const currentQuestion = (current) => ({
    type: QuizActionType.CURRENT_QUESTIONS,
    payload: current
});

export const setCorrectAnswer = (answers) => ({
    type: QuizActionType.ANSWERS_QUESTION,
    payload: answers
});

export const fetchQuestions = () => {
    return async (dispatch) => {
      const response = await axios.get(FETCH_QUESTIONS);
      const resData = await response.data;
      dispatch({ type: QuizActionType.FETCH_QUIZ_QUESTIONS, payload: resData.results });
    }
  };