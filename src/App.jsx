import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./componentss/Signup"
import Signin from "./componentss/Signin"
import Create from "./componentss/Create"
import View from "./componentss/View"
import Nav from "./componentss/Nav"
import ViewMyPost from "./componentss/ViewMyPost"

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
       
        <Route path="/create" element={<Create />} />
        <Route path="/view" element={<View />} />
        <Route path="/view-all" element={<ViewMyPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App