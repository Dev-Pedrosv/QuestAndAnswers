import React from "react";
import { Link } from 'react-router-dom';
import * as C from './styles'
import { AiOutlineHome } from 'react-icons/ai'



const Result = () => {

    let results = localStorage.getItem("result")
    let myResulCorrect = localStorage.getItem("correct")
    let myResulIncorrect = localStorage.getItem("incorrect")

    let arrayCorrect = JSON.parse(myResulCorrect)
    let arrayIncorrect = JSON.parse(myResulIncorrect)
    let arrayResult = JSON.parse(results)



    return (
        <C.App>
            <C.Score>{arrayResult}
                <C.List>

                    <p>Correct:</p>
                    {arrayCorrect.map((arrayCorrect, key) => (
                        <li style={{ color: '#48ff00', margin: '10px 0 0 0' }} key={key}>{arrayCorrect}</li>
                    ))}
                    <p>Incorrect:</p>
                    {arrayIncorrect.map((arrayIncorrect, key) => (
                        <li style={{ color: 'yellow' }} key={key}>{arrayIncorrect}</li>
                    ))}

                </C.List>
                <Link to="/" >
                    <AiOutlineHome
                        color={'rgb(100, 230, 172)'}
                        size={24}>
                    </AiOutlineHome>
                </Link>
            </C.Score>
        </C.App>



    )
}
export default Result