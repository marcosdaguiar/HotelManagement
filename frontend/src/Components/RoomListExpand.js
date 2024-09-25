import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'



export const RoomListExpand = (props) => {
    const value = props.value
    const index = props.index
    const collapse = props.collapse
    const setListOfRooms = props.setListOfRooms
    const allRooms = props.listOfRooms

    const [roomNum, setRoomNum] = useState(value.room_id);
    const [roomType, setRoomType] = useState(value.room_type);
    const [bedSize, setBedSize] = useState(value.room_bed_size);
    const [bedCount, setBedCount] = useState(value.room_bed_count);
    const [roomView, setRoomView] = useState(value.room_view);
    const [roomBooked, setRoomBooked] = useState(value.room_booked);
    const [roomStatus, setRoomStatus] = useState(value.room_status);
    const [roomNotes, setRoomNotes] = useState(value.room_notes);
    const [roomPrice, setRoomPrice] = useState(value.room_price);


    const deleteRoom = (roomId, index) =>{
        collapse(index);

        
        axios.delete("http://localhost:5000/rooms/"+ roomId).then(response =>{
            console.log("room deleted");        
        })
        
        //re render the list of rooms, removing the index of the deleted element
        setListOfRooms(allRooms.filter((_, i)=> i !== index))
        }
        
    const save = (value,index)=>{
        collapse(index)
        const newRoom = {
            id: value.id,
            room_id: roomNum,
            room_type: roomType,
            room_bed_size: bedSize,
            room_bed_count: bedCount,
            room_view: roomView,
            room_booked: roomBooked,
            room_status: roomStatus,
            room_notes: roomNotes,
            room_price: roomPrice,
        }
        axios.put("http://localhost:5000/rooms/update", newRoom);

        console.log(newRoom)   

        allRooms[index] = newRoom; 
        setListOfRooms(allRooms);
    }

    const refreshList = () =>{
        
    }


    
  return (
        <tr className='expandedRow' >
           <td className='exTabeLabels'>                               
                <p>Room #:</p>
                <p>Type:</p>
                <p>Bed #:</p>
                <p>Bed Size:</p>
                <p>Room View:</p>
                <p>Room Booked:</p>
                <p>Status:</p>
                <p>Price:</p>                                                             
            </td>                                                                                     
            <td className= 'exTableFields' width="80px">
                    <input type='text' id='room_id' name='room_id' onChange={e=>setRoomNum(e.target.value)} defaultValue={roomNum} readOnly ></input><br></br>
                    <input type='text' id='room_type' name='room_type' onChange={e=>setRoomType(e.target.value)} defaultValue={roomType} ></input><br></br>
                    <input type='text' id='room_bed_count' name='room_bed_count' onChange={e=>setBedCount(e.target.value)} defaultValue={bedCount}></input><br></br>
                    <input type='text' id='room_bed_size' name='room_bed_size' onChange={e=>setBedSize(e.target.value)} defaultValue={bedSize}></input><br></br>
                    <input type='text' id='room_view' name='room_view' onChange={e=>setRoomView(e.target.value)} defaultValue={roomView}></input> <br></br>
                    <input type='text' id='room_view' name='room_view' onChange={e=>setRoomBooked(e.target.value)} defaultValue={roomBooked}></input> <br></br>
                    <input type='text' id='room_status' name='room_status' onChange={e=>setRoomStatus(e.target.value)} defaultValue={roomStatus}></input><br></br>
                    <label> $</label><input type='text' id='room_price' name='room_price' onChange={e=>setRoomPrice(e.target.value)} defaultValue= {roomPrice} ></input><br></br>                
            </td>
            <td className='exTableNotes'>       
                    <h3><u>Notes</u></h3>
                    <textarea type='text' className='roomNotes' id='room_notes' name='room_notes' onChange={e=>setRoomNotes(e.target.value)} defaultValue={roomNotes} />
            </td>
            <td className='exTableButtons'>
                    <button onClick={(e) =>save(value,index)}>Save</button><br></br>
                    <button onClick={() =>deleteRoom(value.room_id, index)}>Delete</button><br></br>
            </td>           
        </tr>  
  )
}
