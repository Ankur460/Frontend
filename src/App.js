import { CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <div>
      <CssBaseline></CssBaseline>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/contacts'element={<Contact></Contact>} ></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
