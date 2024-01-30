const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json());

const db= require("./models");

//Routers

const roomRouter = require("./routes/Rooms");
app.use("/rooms", roomRouter);

app.del('/rooms/:id', cors(), function (req, res, next){

})

db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("server running on port 3001");
    });
});



