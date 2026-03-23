import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Achievements from "./Achievements";
import Timeline from "./Timeline";
import Navbar from "./Navbar";
import Squad from "./Squad";
function App()
{
  return(
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/squad" element={<Squad/>}/>
      <Route path="/achievements" element={<Achievements/>}/>
      <Route path="/timeline" element={<Timeline/>}/>
    </Routes>
    </BrowserRouter>
  );

}

export default App;