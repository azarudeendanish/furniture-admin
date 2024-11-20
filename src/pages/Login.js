// "use client";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const Login = () => {
//   const [apiData, setApiData] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("https://66f0f85341537919154f06e7.mockapi.io/signup")
//       .then((response) => {
//         setApiData(response.data);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("email: ", email);
//     console.log("password: ", password);

//     if (email) {
//       if (password) {
//         let EmailData = apiData.filter((items) => items.email == email);
//         console.log("db true");
//         if (EmailData.length === 0) {
//           alert("can't see your email, pls register first");
//           navigate("/Signup");
//         } else {
//           if (password == EmailData[0]?.password) {
//             alert("login successfully");
//             navigate("/Products");
//           } else {
//             alert("please enter correct password");
//           }
//         }
//       } else {
//         alert("please fill the password");
//       }
//     } else {
//       alert("please fill the email");
//     }
//   };

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
//       <a href="https://github.com/prakashwiser/"></a>
//       <h1 className="fw-bold text-success py-4">Sign in</h1>
//       <form className="w-25" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//           />
//         </div>
//         <div className="d-flex justify-content-between mt-4">
//           <button type="submit" className="btn btn-primary fw-bold">
//             Sign in
//           </button>
//           <Link to={"/UpdatePassword"} className="btn btn-primary fw-bold">
//             Forget Password
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
   let navigate = useNavigate()
  const [email, setEmail] = useState('')
  
  const [password, setPassword] = useState('')
  const [user, setUser] = useState([])
   useEffect(()=>{
    axios.get('https://67371a9faafa2ef22232a472.mockapi.io/adminUser')
    .then(response=>{
      console.log(response.data);
      setUser(response.data)
    })
    .catch(error => {
      notify(error.message)
      });
   }, [])
  const notify = (params) => toast(params);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('login btn is clicked');
 
    // const regEmail = localStorage.getItem('email')
 
    console.log(email, password );
    if(email && password) {
      const filterUserData = user.filter((items)=>items.email == email)
      console.log(filterUserData);
      if(filterUserData.length  != 0){
        let userEmail = filterUserData[0].email
        console.log(userEmail);
        localStorage.setItem('email', userEmail)
        navigate('/')
      } else {
        notify('please register first')
      }
      
    } else {
      notify('pleasse enter email and password')
    }
    
  }
  return (
    <>
      <form className="w-25" onSubmit={handleSubmit}>
         
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
         
        <div className="d-flex justify-content-between my-4">
          <button type="submit" className="btn btn-warning  fw-bold px-4">
            Login
          </button>
        </div>
      </form >
      <ToastContainer />
    </>
  )
}

export default Login