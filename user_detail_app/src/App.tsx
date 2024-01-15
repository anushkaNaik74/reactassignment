import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        
          <Route path="/" element={<Page1 />} />
          <Route path="/second-page" element={<Page2 />} />
         
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
