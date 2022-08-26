import React, {FC, HTMLAttributes, useEffect, useState} from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { Home } from './Home';
import { About } from './About';
import { Register } from './Register';
import { Routes, Route, Link } from "react-router-dom";
export interface RouterProps extends HTMLAttributes<HTMLDivElement> {}


export const Router: FC<RouterProps> = () => {
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header></Header>

            <div style={{flex: 1}}>
                <Routes>
                <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path='/register' element={<Register/>} />
                </Routes>
           
       
            </div>
         
             <Footer></Footer>
        </div>
    )
}