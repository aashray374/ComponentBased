import React from 'react'
import ReactDOM from 'react-dom/client'
import Aboutpage from './about.jsx'
import './index.css'
import Navbar from './nav.jsx'
import Homepage from './home.jsx'
import Contactpage from './contact.jsx'
import Layout from './layout.jsx'
import { createBrowserRouter , Route , createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />}></Route>
      <Route path="about" element={<Aboutpage />}></Route>
      <Route path="contact" element={<Contactpage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
