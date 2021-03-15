export const getResult = (questions) => {
    let result = 0;
    questions.forEach((question, index) => {
        const { correct_answer } = question;
        if (correct_answer === 'True' && answers[index] === true) result += 1;
        if (correct_answer === 'False' && answers[index] === false) result += 1;
    });

    return result;
}