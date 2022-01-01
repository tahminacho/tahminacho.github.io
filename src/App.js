//import logo from './Tahmina Choudhury.jpg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import {Route, Link} from 'react-router-dom'


function App() {
  return (
    <div>
      <Nav>
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/About'>About</Link>
          </li>
          <li>
          <Link to='/projects'>About</Link>
          </li>
          <li>
          <Link to='/Contact'>About</Link>
          </li>
          </ul>
        </Nav> 
    
     <Routes>
       
       <Route path= " /" component ={Home}exact />
       <Route path= "/About" component ={About}/>
       <Route path= "/Contact" component ={Contact}/>
       <Route path= "/Projects" component ={Projects}/>
       
     </Routes>
       
    </div>
  )
}

export default App;
