import React, { FC, HTMLAttributes } from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Home } from "./Home";
import { About } from "./About";
import { FansRegister } from "./FansRegister";
import { CreatorsRegister } from "./CreatorsRegister";
import { Routes, Route } from "react-router-dom";
import "./router.css";
import { useWindowDimensions } from "../hooks/useWindowDimentions";
import { MobileHeader } from "../common/MobileHeader";
export interface RouterProps extends HTMLAttributes<HTMLDivElement> {}

export const Router: FC<RouterProps> = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}

      //   style={{ cursor: 'url(Frame.png), default !important' }}
    >
      {width < 1024 ? <MobileHeader /> : <Header></Header>}

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register/fans" element={<FansRegister />} />
          <Route path="/register/creators" element={<CreatorsRegister />} />
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
};
