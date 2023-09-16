import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import   NavbarComponent  from './Components/NavbarComponent';

import CarosualComponent from './Components/CarosualComponent';

import  Card  from './Components/Card';

import About from './Components/About'
import FooterComponent from './Components/FooterComponent';

import TestmonailComponent from './Components/TestmonailComponent'
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">

      <NavbarComponent/>
      <CarosualComponent/>
      <Card/>
      <About/>
      <TestmonailComponent/>
      <Contact/>
      <FooterComponent/>
      

      
    </div>
  );
}

export default App;
