import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import LoginPage from './components/pages/LoginPage';
import LogoutPage from './components/pages/LogoutPage';
import ProfilePage from './components/pages/ProfilePage';
import SignupPage from './components/pages/SignupPage';
import MovieDetailPage from './components/pages/MovieDetailPage';
import SearchDetailPage from './components/pages/SearchDetailPage';
import './App.css';
import { ThemeContextProvider } from './components/context/ThemeContext';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <ThemeContextProvider value={{theme, updateTheme:setTheme}}>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/logout' element={<LogoutPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/movie-detail/:id' element={<MovieDetailPage/>}/>
            <Route path='/search-detail' element={<SearchDetailPage/>}/>
          </Routes>
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
