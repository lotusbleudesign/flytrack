import React from 'react';
import { Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import HomePage from "./Home";
import Favoris from './Favoris';
import './../styles/App.css';
import Header from './Header';

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="favoris" element={<Favoris />} />
        <Route exact path="settings" element={<Settings />} />
        <Route path="*" element={<HomePage className="home" />} />
      </Routes>
    </>
  );
}
