const express = require ('express')
const router = express.Router()
const {rooms} = require('../models');
const { json } = require('sequelize');
const cors = require('cors')


router.get("/", async (req, res) =>{
    const listOfRooms = await rooms.findAll();
    res.json(listOfRooms)
})

router.post("/", async (req, res) =>{
    const rooms = req.body
    await Room.create(rooms); 
    res.json(rooms);
});

router.delete("/:room_id", async (req, res) => {
    const room_id = req.params.room_id;
    await Room.destroy({
        where: {
            room_id: room_id,
        },
    })
    res.json("DELETED SUCCESSFULLY");
})

router.put("/update", async (req, res) => {
    const roomsUpdate = req.body

    await Room.update({
        room_id: roomsUpdate.room_id,
        room_type: roomsUpdate.room_type,
        room_bed_size: roomsUpdate.room_bed_size,
        room_bed_count: roomsUpdate.room_bed_count,
        room_view: roomsUpdate.room_view,
        room_status: roomsUpdate.room_status,
        room_notes: roomsUpdate.room_notes,
        room_price: roomsUpdate.room_price}, {
            where:{
                room_id: roomsUpdate.room_id,
            }
        });
    res.json(roomsUpdate);
})

module.exports = router