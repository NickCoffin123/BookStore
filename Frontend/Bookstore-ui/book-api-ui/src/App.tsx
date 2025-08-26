import {Route, BrowserRouter as Router, Routes} from "react-router";
import "./App.css"
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";
import AddBook from "./components/AddBook.tsx"

function App() {
return(
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/about' element={<About/>}/>
            <Route path='/add-book' element={<AddBook/>}/>
        </Routes>
    </Router>
)

}

export default App
