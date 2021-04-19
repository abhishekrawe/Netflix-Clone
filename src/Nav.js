import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
 const [show, handleShow] = useState(false);

 useEffect(() => {
     window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
             handleShow(true);

         }else handleShow(false);

     });
     return () => {
         window.removeEventListener("scroll");
     };
 }, []);

   return (
       <div className={`nav ${show && "nav__black"}`} >
       <img 
       className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          />

       <img 
       className="nav__avatar"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEtxZQJRk2OEw/profile-displayphoto-shrink_200_200/0/1610214059742?e=1619049600&v=beta&t=TUOtWL6sYZYexDCGKaCf4Mc5RM-uSGJ0csTq3ncOu3Q"
          alt="Netflix Logo"
          />
       </div>
   )
}

export default Nav