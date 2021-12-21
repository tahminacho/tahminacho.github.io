//import logo from './Tahmina Choudhury.jpg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import {Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <main>
       <switch>
       <Route path= "/Home" component ={Home}exact />
       <Route path= "/About" component ={About}/>
       <Route path= "/Contact" component ={Contact}/>
       <Route path= "/Projects" component ={Projects}/>
       </switch>
     </main>
       
    </div>
  );
}

export default App;
