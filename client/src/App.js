import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar"
import Form from './components/form/form';
import Home from "./components/home.js";
import Users from './components/users/user';
import About from "./components/about.js";


function App() {
  return (
    <div className="App">
    <Router>

    
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/subscribe" element={<Form/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
