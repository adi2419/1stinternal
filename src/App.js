import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Course from "./components/Cource";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";//make sur that the file name is always capital 
import Nopage from "./components/Nopage";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
function App() {
  return (
    // <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Course />} />
          <Route path="Home" element={<Home />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    // </div>
  );
}

export default App;
