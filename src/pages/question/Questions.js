import React, { useState, useEffect } from "react";
import * as C from './styles'
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import axios from "axios";


export default function Questions() {

    const [questions, setQuestions] = useState([
        {
            "category": "Category",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Question",
            "correct_answer": "...",
            "incorrect_answers": [
                "...",
                "...",
                "..."
            ]
        },
    ]);

    let numerQuest = localStorage.getItem("quest")

    let arrayNumberQuest = JSON.parse(numerQuest)


    useEffect(() => {

        axios.get(`https://opentdb.com/api.php?amount=${arrayNumberQuest}`)
            .then((response) => {
                setQuestions(response.data.results)


            })

    }, []);

    let answers = []
    let questCorrect = []
    let questIncorrect = []
    let results = []

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [incorrect, setIncorrect] = useState([])
    const [correct, setCorrect] = useState([])
    const [score, setScore] = useState(0);


    const home = () => {
        localStorage.clear();
    }

    const handleAnswerButtonClick = (answers) => {
        const q = [questions[currentQuestion].correct_answer, ...questions[currentQuestion].incorrect_answers]
        if (answers == questions[currentQuestion].correct_answer) {
            setScore(score + 1)
            const correto = [`Question ${currentQuestion + 1} : ${questions[currentQuestion].question}${q} Correct: ${answers}`, ...correct]
            setCorrect(correto)




        } else {
            const incorreto = [`Question ${currentQuestion + 1} : ${questions[currentQuestion].question} ${q} - | Response: ${answers} | Correct:${questions[currentQuestion].correct_answer}`, ...incorrect]
            setIncorrect(incorreto)

        }



        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {

            setShowScore(true);



        }


    };

    return (

        < C.App >

            {/* HINT: replace "false" with logic to display the 
  score when the user has answered all the questions */}
            {
                showScore ? (
                    <>
                        <C.Score>You scored {score} out of {questions.length}

                            <C.List>

                                <p>Correct:</p>
                                {correct.map((correct, key) => (
                                    <li style={{ color: '#48ff00', margin: '15px 0 0 0' }} key={key}>{correct}</li>
                                ))}
                                <p>Incorrect:</p>
                                {incorrect.map((incorrect, key) => (
                                    <li style={{ color: 'yellow', margin: '15px 0 0 0' }} key={key}>{incorrect}</li>
                                ))}
                                <p style={{ display: 'none' }}>
                                    {results = [`You scored ${score} out of ${questions.length}`]}
                                    {localStorage.setItem("result", JSON.stringify(results))}
                                    {questCorrect = correct}
                                    {localStorage.setItem("correct", JSON.stringify(questCorrect))}
                                    {questIncorrect = incorrect}
                                    {localStorage.setItem("incorrect", JSON.stringify(questIncorrect))}
                                </p>

                            </C.List>

                            <Link to="/" >
                                <AiOutlineHome
                                    color={'rgb(100, 230, 172)'}
                                    size={24}>
                                </AiOutlineHome>
                            </Link>
                        </C.Score>




                    </>

                ) : (
                    <>

                        <C.QuestSection>

                            <C.QuestCont>
                                <Link to="/" onClick={() => home()}>
                                    <AiOutlineHome
                                        color={'rgb(100, 230, 172)'}
                                        size={24}>
                                    </AiOutlineHome>
                                </Link>

                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </C.QuestCont>
                            <C.QuestText><C.Category>{questions[currentQuestion].category}</C.Category>{questions[currentQuestion].question}</C.QuestText>
                        </C.QuestSection>
                        <C.AnswerSection>
                            <p style={{ display: 'none' }}>{answers = [questions[currentQuestion].correct_answer, ...questions[currentQuestion].incorrect_answers]}</p>

                            {answers.map((answers, index) => (
                                <C.Button key={index} onClick={() => handleAnswerButtonClick(answers)}>{answers}</C.Button>
                            ))}


                        </C.AnswerSection>
                    </>
                )
            }
        </C.App >
    );
}
