import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import MyButton from "./components/MyButton";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Products />} />
    //     <Route path="/AddProduct" element={<AddProduct />} />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Signup" element={<Signup />} />
    //   </Routes>
    // </Router>
    <>
      <MyButton a='submit' st='red' c='blue' h='100px' onclick='success' />
      {/* <MyButton a='upload' st='green' w='100px' onlick='danger' />
      <MyButton a='paynow' st2='150px' onclick='warning'  />
      <MyButton st='blue' st2='200px' /> */}
    </>
  );
}

export default App;
