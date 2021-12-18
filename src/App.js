//import logo from './Tahmina Choudhury.jpg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import {Routes, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <main>
       <switch>
       <Routes path= "/Home" component ={Home}exact />
       <Routes path= "/About" component ={About}/>
       <Routes path= "/Contact" component ={Contact}/>
       <Routes path= "/Projects" component ={Projects}/>
       </switch>
     </main>
       
    </div>
  );
}

export default App;
