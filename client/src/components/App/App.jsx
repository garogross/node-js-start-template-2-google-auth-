import {Route, Routes} from 'react-router-dom';
import Head from '../global/Head/Head'

import Navbar from "../global/Navbar/Navbar";
import HomePage from "../../pages/HomePage";

import {
    errorPagePath,
    homePagePath,
} from "../../router/path";
import {useEffect} from "react";
import ErrorPage from "../../pages/ErrorPage";

function App() {


    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={homePagePath} element={<HomePage/>}/>
                <Route path={errorPagePath} element={<ErrorPage/>}/>
            </Routes>
        </>
    );
}

export default App;