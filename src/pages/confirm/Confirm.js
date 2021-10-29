import React from "react";
import { Link } from 'react-router-dom';
import * as C from './styles'



const Confirm = () => {



    return (


        <C.Container>

            <C.Title>Do you want to start the Question's <span>?</span></C.Title>
            <C.Flex>

                <Link to="/">
                    <C.Button to="/" background={`rgb(214,9,44)`}>Cancel</C.Button>
                </Link>


                <Link to="/questions" >
                    <C.Button background={`rgba(103,210,35,1)`}>Start</C.Button>
                </Link>

            </C.Flex>
        </C.Container >
    )
}
export default Confirm;
