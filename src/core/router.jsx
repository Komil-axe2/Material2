import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../App';
import Erkaklar from '../page/erkaklar';
import Muddatli from '../page/muddatli';
import BasicModal from '../components/modal';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/erkaklar"} element={<Erkaklar />} />
                <Route path={"/muddatli"} element={<Muddatli />} />
                <Route path={"/basicmodal"} element={<BasicModal />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;