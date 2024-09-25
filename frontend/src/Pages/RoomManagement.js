import React from 'react'
import { RoomGeneralList } from '../Components/RoomGeneralList';
import { AddRoom } from '../Components/AddRoom';
import { useState, useEffect } from 'react';
import axios from "axios"

export const RoomManagement = () => {

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
        <h1>Room Management</h1>
        <hr></hr>
      </header>
      <div className="row">
        <div className="column">
          <RoomGeneralList listOfRooms={listOfRooms} setListOfRooms={setListOfRooms}/>
        </div>
        <div className="column2">
        <AddRoom setListOfRooms={setListOfRooms}/>
          <br></br>
          <h2>Analytics</h2>

        </div>

      </div>
    </div>
  )
}
