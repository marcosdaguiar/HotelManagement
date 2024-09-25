import React from 'react'
import axios from "axios"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


export const AddRoom = ({setListOfRooms}) => {
    const onSubmit = (data) => {
        axios.post("http://localhost:5000/rooms", data).then((response) => {
        })
        setListOfRooms(oldData =>[...oldData, data]);        
    }

    const initialValues = {
        room_id: "",
        room_type: "",
        room_bed_size: "",
        room_bed_count: "",
        room_view: "",
        room_booked: "",
        room_status: "",
        room_notes: "",
        room_price: "",
    };

    const validationSchema = Yup.object().shape({ 
        room_id: Yup.number(),
        room_type: Yup.string().required(),
        room_bed_size: Yup.string().required(),
        room_bed_count: Yup.number().required(),
        room_view: Yup.string().required(),
        room_b: Yup.string().required(),
        room_status: Yup.string().required(),
        room_notes: Yup.string().required(),
        room_price: Yup.number().required(),
    })

   
  return (
    <div>
        <h3>Add Room</h3>
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form className='addRoomBox'> 
                <div className='addRoomContent'>
                    <label>Room#:</label>      
                        <Field  type='text'
                                id='room_id'
                                name='room_id'
                                autoComplete='off'/>
                            {/*    <ErrorMessage name='room_id' component="span"/>*/}
                     
                    <label>Type: </label>
                        <Field  type='text'
                                id='room_type'
                                name='room_type'
                                autoComplete='off'/>
                     
                    <label>Beds #: </label>
                        <Field  type='text'
                                id= 'room_bed_count'
                                name= 'room_bed_count'
                                autoComplete='off' />  
                     
                    <label>Bed Size: </label>
                        <Field  type='text'
                                id= 'room_bed_size'
                                name= 'room_bed_size'
                                autoComplete='off'/>
                     
                    <label>Room View: </label>
                        <Field  type='text'
                                id= 'room_view'
                                name= 'room_view'
                                autoComplete='off'/>
                     
                    <label>Status: </label> 
                        <Field  type='text'
                                id= 'room_status'
                                name= 'room_status'
                                autoComplete='off'/>
                    
                    <label>Notes: </label>
                        <Field  as="textarea"   
                                type='text'
                                id= 'room_notes'
                                name='room_notes'
                                autoComplete='off'/>
                     
                    <label>Price: </label>
                        <Field  type='text'
                                id= 'room_price'
                                name= 'room_price'
                                autoComplete='off'/>
                    <br></br> 
                    <button type='submit'>Add Room</button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}
