import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../src/pages/home/Home';
import Questions from '../src/pages/question/Questions';
import Confirm from '../src/pages/confirm/Confirm';
import Result from '../src/pages/result/Result'


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Confirm} path="/confirm" exact />
            <Route component={Questions} path="/questions" exact />
            <Route component={Result} path="/result" exact />


        </BrowserRouter>
    )
}


export default Routes;
