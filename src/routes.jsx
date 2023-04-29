import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Noticia } from "./pages/Noticia";

export default function AppRoutes(){
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/" exact/> 
      <Route element={<Noticia/>} path="/Noticia"/> 
    </Routes>
    </BrowserRouter>
  )
}