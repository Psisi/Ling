import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchDetailPage from './pages/SearchDetailPage';
import Header from "./components/Header";
import { ThemeContextProvider } from "./context/ThemeContext";
import './App.css';
import React, { useState } from "react";

function App() {
  const [theme, setTheme] =useState('light');
  return (
    <div>
      <ThemeContextProvider value={{theme, updateTheme: setTheme}}>
        
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage/>} />
              <Route path="/signup" element={<SignupPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
              <Route path="/movie-detail" element={<MovieDetailPage />} />
              <Route path="/search-detail" element={<SearchDetailPage />} />
            </Routes>
          </div>
        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
