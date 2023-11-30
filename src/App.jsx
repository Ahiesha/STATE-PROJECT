
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Task1 from "../src/components/Task1.jsx";
import Task2 from "./components/Task2.jsx";
import Task3 from "./components/Task3.jsx";
import Task4 from './components/Task4.jsx';
import Header from "./components/Header.jsx";
//import Footer from './components/Footer.jsx';




 function App() {
  return (
    <>
    
    
    <Router>
    <Header />
    
    
    
      <Routes>
      <Route path={"/"} element={<Task1 />}/>
      <Route path={"/Task2"} element={<Task2 />}/>
      <Route path={"/Task3"} element={<Task3 />}/>
      <Route path={"/Task4"} element={<Task4 />}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App;
 