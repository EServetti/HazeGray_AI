import Contact from "../../pages/contact";
import Home from "../../pages/home";
import "../../styles/App.css";
import {Route, Routes} from "react-router-dom"

const MainContent = () => {
  return (
    <div className="main-content-component">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default MainContent;
