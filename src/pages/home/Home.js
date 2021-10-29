import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as C from './styles'





const Home = () => {

    const [number, setNumber] = useState(1)


    const numberChange = (e) => {
        setNumber(e.target.value)

    }

    const alertInfo = () => {

        alert('Preencha os campos.')

    }

    const quest = () => {
        localStorage.setItem('quest', number)

    }

    const alertLocalStorage = () => {

        alert("Responda questões para ter um relatorio.")


    }


    return (
        <C.Container>

            <C.Title>Welcome to QUESTION's <span>?</span></C.Title>
            <C.Input id="number" type="number" placeholder="Number of questions" min={1} onChange={numberChange} />

            <C.Flex>
                {number.length > 0 ?
                    <Link to="/confirm" >
                        <C.Button
                            onClick={() => quest()}
                            background={'rgb(100, 230, 172)'}>
                            Iniciar
                        </C.Button>
                    </Link> : <C.Button onClick={() => alertInfo()}
                        background={'rgb(100, 230, 172)'}>
                        Iniciar
                    </C.Button>}

            </C.Flex>


            {localStorage.length > 0 ? <Link to="/result">
                <C.Button background={'rgb(120 27 46)'}>
                    Result
                </C.Button>
            </Link> : <C.Button onClick={() => alertLocalStorage()}
                background={'rgb(120 27 46)'}>
                Result</C.Button>}

        </C.Container >
    )
}
export default Home;


