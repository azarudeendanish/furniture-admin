// "use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs'

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(10)

// const Signup = () => {
//   const [num, setNum] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repassword, setRepassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("hi");
//     if (password == repassword) {
//       if (email == "" && password == "")
//         return alert("invaild email or password");
//       axios.post("https://66f0f85341537919154f06e7.mockapi.io/signup", {
//         num,
//         email,
//         password,
//       });
//       setNum("");
//       setEmail("");
//       setPassword("");
//       setRepassword("");
//       navigate("/Signin");
//     } else {
//       alert("Miss Match Password");
//     }
//   };
//   const DeleteData = (id) => {
//     axios.delete(`https://66f0f85341537919154f06e7.mockapi.io/signup/1`);
//   };
//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
//       <h1 className="fw-bold text-danger">Sign Up</h1>
//       <form className="w-25" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Number
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="name"
//             placeholder="Enter Number"
//             value={num}
//             onChange={(e) => setNum(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter Eamil"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Conform Password
//           </label>
//           <input
//             type="password"
//             placeholder="Re-Enter  Password"
//             className="form-control"
//             id="repassword"
//             value={repassword}
//             onChange={(e) => setRepassword(e.target.value)}
//           />
//         </div>
//         <div className="d-flex justify-content-between my-4">
//           <button type="submit" className="btn btn-warning  fw-bold px-4">
//             Sign up
//           </button>
//           <button
//           onClick={()=>DeleteData(1)}
//           type="submit"
//           className="btn btn-danger  fw-bold px-4"
//         >
//           Delete
//         </button>
//         </div>

//       </form>
//     </div>
//   );
// };
// export default Signup;



function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const notify = (params) => toast(params);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit btn is clicked');
    console.log(name);
    console.log(number);
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      console.log('pass missmatch');
      notify("password missmatch!")
      setPassword('')
      setConfirmPassword('')
    } else if(name && email && number) {
      const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
      console.log(hashedPassword);
      axios.post('https://67371a9faafa2ef22232a472.mockapi.io/adminUser', {
        name,
        email,number,
        'password' :hashedPassword
      })
      .then(response => {
        console.log(response?.data?.email);
        // sessionStorage.setItem("email", response.data.email);
         notify(`${response.data.email} is successfully created`)
        })
      .catch(error => {
        notify(error.message)
        });
      
    } else {
      notify('name, email and number are mandatory')
    }

  }
  // function deleted(params) {
  //   axios.delete(`https://67371a9faafa2ef22232a472.mockapi.io/adminUser/${params}`)
  //   toast('data deleted')
  // }
  return (
    <>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
        
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <label htmlFor="tel" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="tel"
            placeholder="Enter Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
        <div className="mb-3">
          <label htmlFor="cpass" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpass"
            placeholder="re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between my-4">
          <button type="submit" className="btn btn-warning  fw-bold px-4">
            Sign up
          </button>
        </div>
      </form >
      {/* <button onClick={()=>deleted('2')}>delete</button> */}
      <ToastContainer />
    </>
  )
}

export default Signup