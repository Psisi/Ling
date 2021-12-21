import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import MyBlog from './Components/MyBlog';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element= {<MyBlog/>} />
        <Route path="about" element= {<AboutMe/>} /> 
      </Routes>
    </div>
  );
}

export default App;
