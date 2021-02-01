import React, {Component} from "react";
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
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
            },
            {
                id: 3,
                question: 'Something something and another something?',
                rightAnswer: 1,
                answers: [
                    {text: 'This is the right answer', id: 1},
                    {text: 'Interesting text', id: 2},
                    {text: 'Another one', id: 3},
                    {text: 'Something not right', id: 4},
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerID) => {
        const rightAnswer = this.state.quiz[this.state.currentQuestion].rightAnswer;
        let results = this.state.results;

        if (this.state.answerState && Object.values(this.state.answerState)[0] === 'success') return;

        if (rightAnswer === answerID) {
            if(!results[this.state.currentQuestion + 1]) results[this.state.currentQuestion + 1] = 'success';
            this.setState({
                answerState: {[answerID]: 'success'},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.state.currentQuestion + 1 === this.state.quiz.length) {
                    this.setState({isFinished: true});
                    return;
                }

                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                    answerState: null
                });
                clearTimeout(timeout);
            }, 300)
        } else {
            results[this.state.currentQuestion + 1] = 'failed';
            this.setState({
                answerState: {[answerID]: 'failed'},
                results
            });
        }


    };

    restartQuizHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            currentQuestion: 0,
            answerState: null,
        })
    };

    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.Wrapper}>
                    <h1>Quiz</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quizItems={this.state.quiz}
                                restartQuizHandler={this.restartQuizHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.currentQuestion].answers}
                                question={this.state.quiz[this.state.currentQuestion].question}
                                quizLength={this.state.quiz.length}
                                currentQuestion={this.state.currentQuestion + 1}
                                onAnswerClick={this.onAnswerClickHandler}
                                answerState={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;