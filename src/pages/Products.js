// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Table } from "semantic-ui-react";
// // import { Button } from 'semantic-ui-react'
// import { Link } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";
// const Products = () => {
//   const [APIData, setAPIData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://67346355a042ab85d119f3fa.mockapi.io/products`)
//       .then((response) => {
//         setAPIData(response.data);
//       });
//   }, []);

//   const getData = () => {
//     axios
//       .get(`https://67346355a042ab85d119f3fa.mockapi.io/products`)
//       .then((getData) => {
//         setAPIData(getData.data);
//       });
//   };
//   const handleDelete = (id) => {
//     axios
//       .delete(`https://67346355a042ab85d119f3fa.mockapi.io/products/${id}`)
//       .then(() => {
//         getData();
//       });
//   };
//   const handleUpdate = (id) => {
//     console.log(id);

//   }
//   console.log(APIData);


//   return (
//     <>

//       <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: 'grey', padding: '10px' }}>
//         <div>Product Page</div>
//         <Link className="btn btn-success" to="./AddProduct">
//           Add New Products
//         </Link>
//       </div>
//       <div className="container">
//         <div>
//           {APIData.length !== 0 ? (
//             <Table singleLine>
//               <Table.Header>
//                 <Table.Row>
//                   <Table.HeaderCell>S.No</Table.HeaderCell>
//                   <Table.HeaderCell>Name</Table.HeaderCell>
//                   <Table.HeaderCell>Price</Table.HeaderCell>
//                   <Table.HeaderCell>Image</Table.HeaderCell>
//                   <Table.HeaderCell>Category</Table.HeaderCell>
//                   <Table.HeaderCell>Update</Table.HeaderCell>
//                   <Table.HeaderCell>Delete</Table.HeaderCell>
//                 </Table.Row>
//               </Table.Header>

//               <Table.Body>
//                 {APIData.map((data, index) => {
//                   return (
//                     <Table.Row>
//                       <Table.Cell>{index + 1}</Table.Cell>
//                       <Table.Cell>{data.name}</Table.Cell>
//                       <Table.Cell>{data.price}</Table.Cell>
//                       <Table.Cell>
//                         <img
//                           style={{ width: "60px" }}
//                           src={
//                             "https://raw.githubusercontent.com/prakashwiser/User-page-furniture/refs/heads/main/src/pages/home/images/" +
//                             data.image
//                           }
//                           alt="images"
//                         />
//                       </Table.Cell>
//                       <Table.Cell>{data.listingType}</Table.Cell>
//                       <Table.Cell>
//                         {/* <Button color='green'>Primary</Button> */}
//                         <Button
//                           size='small' color='green'
//                           onClick={() => handleUpdate(data.id)}
//                         >
//                           Update
//                         </Button>
//                       </Table.Cell>
//                       <Table.Cell>
//                         <Button
//                           className="ui red button"
//                           onClick={() => handleDelete(data.id)}
//                         >
//                           Delete
//                         </Button>
//                       </Table.Cell>
//                     </Table.Row>

//                   );
//                 })}
//               </Table.Body>
//             </Table>
//           ) : (
//             <>No data</>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState('')
  useEffect(() => {
    let user = localStorage.getItem('email')
    console.log(user);
     
    if (!user) {
      navigate('/Login')
    } else {
      setUserData(user)
    }
  }, [])
  const logout = () => {
    console.log('logout button is clicked');
    sessionStorage.clear()
    navigate('/Login')
  }
  return (
    <>
      {userData ?
        <>
          thos is product opage
          welcome user {userData}
          <button onClick={logout}>Log out</button>
        </>
        :
        <></>
      }


    </>
  )
}

export default Products