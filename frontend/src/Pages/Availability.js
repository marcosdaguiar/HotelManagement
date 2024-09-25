import React from 'react'
import {AvailabilityList} from '../Components/AvailabilityList';
import { useState, useEffect } from 'react';
import axios from "axios"

export const Availability = () => {

  useEffect(() => {
    axios.get("http://localhost:5000/rooms").then((response) => {
      //console.log(response.data);
      setListOfRooms(response.data);
    })
  },[])

  const [listOfRooms, setListOfRooms] = useState([]);



  return (
    <div>
      <header className = "header">
        <h1>Availability</h1>
        <hr></hr>
      </header>
      <div className='availability_steps'></div>
          
      <div className='row'>
        <h1>Steps in the booking process</h1>
        <div className='column'>
          <h1>Room Basic Info</h1>
        </div>
        <div className='column2'>
          <h1>Rooms available</h1>

        </div>

      </div>

    </div>
    )
}
