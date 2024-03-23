// import React from "react";
// import './contact.css'

// function Contactpage() {
//     return(
//         <div className="container">
//         <h1>Contact Us</h1>
//         <div className='form'>
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" required><br>

//             <label for="email">Email:</label>
//             <input type="email" id="email" name="email" required><br>

//             <label for="message">Message:</label>
//             <textarea id="message" name="message" rows="4" required></textarea><br>

//             <button id="submit">Submit</button>
//         </div>
//         </div>    
//     )
// }

import React from "react";
import './contact.css'

function Contactpage() {
    return(
        <div className="container">
            <h1 className='heading'>Contact Us</h1>
            <div className='form'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea><br />

                <button type="submit" id="submit">Submit</button>
            </div>
        </div>    
    )
}

export default Contactpage;
