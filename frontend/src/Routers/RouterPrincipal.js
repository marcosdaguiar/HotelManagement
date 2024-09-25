import React from 'react'
import {Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Guests } from '../Pages/Guests';
import { Logout } from '../Pages/Logout';
import { Reports } from '../Pages/Reports';
import { Occupancy} from '../Pages/Occupancy';
import { Settings } from '../Pages/Settings'
import { StaffManagement } from '../Pages/StaffManagement';
import { Error404 } from '../Pages/Error404';
import { Inbox } from '../Pages/Inbox';
import { RoomManagement } from '../Pages/RoomManagement';
import { Availability } from '../Pages/Availability';


export const RouterPrincipal = () => {
  return (

    <div className= "layout">
      <BrowserRouter>
      <nav className="side">
        <h1>Logo</h1>
        
        <hr></hr>
        <h1>User</h1>
        <ul>
          {/*<li><NavLink to="/Availability">Availability</NavLink></li>*/}
          <li><NavLink to="/Availability">Availability</NavLink></li>
          <li><NavLink to="/Occupancy">Occupancy</NavLink></li>
          <li><NavLink to="/Guests">Guests</NavLink></li>
          <li><NavLink to="/RoomManagement">Room Management</NavLink></li>
          <li><NavLink to="/StaffManagement">Staff Management</NavLink></li>
          <li><NavLink to="/Reports">Reports</NavLink></li>
          <li><NavLink to="/Settings">Settings</NavLink></li>
          <li><NavLink to="/Inbox">Inbox</NavLink></li>
          <li><NavLink to="/Logout">Log out</NavLink></li>
        </ul>
      </nav>

      <section className='content'>
      
        <Routes>
            <Route path = "/Availability" element = {<Availability/>} />
            <Route path = "/RoomManagement" element = {<RoomManagement/>} />
            <Route path = "/Guests" element = {<Guests/>} />
            <Route path = "/Inbox" element = {<Inbox/>} />
            <Route path = "/Logout" element = {<Logout/>} />
            <Route path = "/Reports" element = {<Reports/>} />
            <Route path = "/Occupancy" element = {<Occupancy/>} />
            <Route path = "/Settings" element = {<Settings/>} />
            <Route path = "/StaffManagement" element = {<StaffManagement/>} />
            <Route path = "/*" element = {<Error404/>} />
        </Routes>
    
        
        <br></br>
      </section>

      <footer className='footer'>
        &copy; Hotel Management version 1.0
      </footer>
      </BrowserRouter>


    </div>
    

  )
}
