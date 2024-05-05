// import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='Home'>
        <Home/>
      </div>
      <div className="Navbar">
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
