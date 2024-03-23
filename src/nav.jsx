 import React from 'react';
import "./nav.css";
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav className="nav">
      <a href="/" className="title">
        IIITA
      </a>
      <ul>
        <li>
          <NavLink to="" style={{ color: "white" }}>
             Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" >
             About
          </NavLink>
        </li>
        <li>
         <NavLink to="/contact" >
               Contact
           </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar

// import React from "react";
// import "./nav.css";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <div className="navbar">
//         <ul className="list">
//           <li className="listitems">
//             <NavLink to="" >
//               Home
//             </NavLink>
//           </li>
//           <li className="listitems">
//             <NavLink to="/about" >
//               About
//             </NavLink>
//           </li>
//           <li className="listitems">
//             <NavLink to="/contact" >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Header;