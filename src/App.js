import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {About} from "./Components/About"
import {Contact} from "./Components/Contact";
import {Home} from "./Components/Home";
import Waitlist from './Components/Waitlist';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/waitlist' element={<Waitlist/>} />
        </Routes>
      </div>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
