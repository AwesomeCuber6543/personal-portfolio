// import logo from './logo.svg';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* <div className='Home'>
        <Home/>
      </div>
      <div className="Navbar">
        <Navbar/>
      </div> */}
      <Homepage/>
    </div>
  );
}

export default App;
