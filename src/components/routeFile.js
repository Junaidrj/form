import React from "react";
import App from"../App"
import { Routes, Route } from "react-router-dom";
import Page from "../pages/step01";
import Step2 from "../pages/step02";
import Expirens from "../pages/expirens";
import CompleteProfile from "../pages/completeProfile";
import FromSearch from "../pages/fromSearch";
export default function RouteFile() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page" element={<Page/>} />
        <Route path="/step2" element={<Step2/>} />
        <Route path='/expirens' element={<Expirens/>}/>
        <Route path='/complete' element={<CompleteProfile/>}/>
        <Route path='/fromsearch' element={<FromSearch/>}/>

      </Routes>
</>
);
}