const express = require ('express')
const router = express.Router()
const {Rooms} = require('../models')



router.get("/", async(req, res) =>{
    const listOfRooms = await Rooms.findAll();
    res.json(listOfRooms)
})

router.post("/", async (req, res) =>{
    const rooms = req.body
    await Rooms.create(rooms);
    res.json(rooms);
});


module.exports = router