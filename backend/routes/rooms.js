const express = require ('express')
const router = express.Router()
const {Rooms} = require('../models');
const { json } = require('sequelize');
const cors = require('cors')


router.get("/", async(req, res) =>{
    const listOfRooms = await Rooms.findAll();
    res.json(listOfRooms)
})

router.post("/", async (req, res) =>{
    const rooms = req.body
    await Rooms.create(rooms);
    res.json(rooms);
});

router.delete("/:room_id", async (req, res) => {
    const room_id = req.params.room_id;
    await Rooms.destroy({
        where: {
            room_id: room_id,
        },
    })
    res.json("DELETED SUCCESSFULLY");
})


module.exports = router