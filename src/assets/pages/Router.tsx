import React, {FC, HTMLAttributes, useEffect, useState} from 'react';
import { Header } from '../../common/Header';
import { Footer } from '../../common/Footer';
import { App } from '../../App';
import { Routes, Route, Link } from "react-router-dom";
export interface RouterProps extends HTMLAttributes<HTMLDivElement> {}


export const Router: FC<RouterProps> = () => {
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header></Header>
            {/* <App/>
           <Routes>
            <Route path="/" element={<App/>}/>
           </Routes>
        
            <Footer></Footer> */}
            <App/>
             <Footer></Footer>
        </div>
    )
}