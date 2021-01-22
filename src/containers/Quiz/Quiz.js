import React, {Component} from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
    state = {
        quiz: [
            {
                question: 'Which color is the sky?',
                answers: [
                    {text: 'Question 1', id: 1},
                    {text: 'Question 2', id: 2},
                    {text: 'Question 3', id: 3},
                    {text: 'Question 4', id: 4},
                ]
            }
        ]
    };

    onAnswerClickHandler(answerID) {
        console.log(`Answer ID is ${answerID}`)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.Wrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;