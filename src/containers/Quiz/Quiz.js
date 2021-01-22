import React, {Component} from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
    state = {
        currentQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'What is the brightest planet in the night sky?',
                rightAnswer: 2,
                answers: [
                    {text: 'Saturn', id: 1},
                    {text: 'Venus', id: 2},
                    {text: 'Jupiter', id: 3},
                    {text: 'Uranus', id: 4},
                ]
            },
            {
                id: 2,
                question: 'World Population in 2021?',
                rightAnswer: 4,
                answers: [
                    {text: '5.7 Billion', id: 1},
                    {text: '7.8 Million', id: 2},
                    {text: '6.3 Billion', id: 3},
                    {text: '7.8 Billion', id: 4},
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerID) => {
        const rightAnswer = this.state.quiz[this.state.currentQuestion].rightAnswer;

        if (rightAnswer === answerID) {
            this.setState({
                answerState: {[answerID]: 'success'}
            });

            const timeout = window.setTimeout(() => {
                if (this.state.currentQuestion + 1 === this.state.quiz.length) {
                    console.log('Finished');
                    return;
                }

                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                    answerState: null
                });
                clearTimeout(timeout);
            },1000)
        } else {
            this.setState({
                answerState: {[answerID]: 'failed'}
            });
        }





    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.Wrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.currentQuestion].answers}
                        question={this.state.quiz[this.state.currentQuestion].question}
                        quizLength={this.state.quiz.length}
                        currentQuestion={this.state.currentQuestion + 1}
                        onAnswerClick={this.onAnswerClickHandler}
                        answerState={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;