const express = require("express");
const cors = require("cors");
const controller = require("./controller");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/link", (req, res) => {
    controller.getLink()
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
    });
});

app.post("/addlink", (req, res) => {
    console.log(req.body);
    controller.addLink(req)
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
    });
});

app.put("/updateLink", (req, res) => {
    
    controller.updateLink(req)
    .then((response) => 
        res.send(response)
    )
    .catch((error) => {
        console.log(error); 
    })
});
app.delete("/deleteLink", (req, res) => {        
    controller.deleteLink()
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        console.log(error); 
    });
});
module.exports = app;