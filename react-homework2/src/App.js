import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import MyBlog from './Components/MyBlog';
import Footer from '../src/Components/Footer';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element= {<MyBlog/>} />
        <Route path="about" element= {<AboutMe/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
