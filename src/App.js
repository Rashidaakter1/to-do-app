
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ToDoList from './components/ToDoList';
import Calender from './components/Calender';
import CompletedTask from './components/CompletedTask';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-cyan-600 w-full' >
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/completedTask" element={<CompletedTask />} />
       
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
