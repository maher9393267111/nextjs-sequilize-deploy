const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const app = require("express")();
const { v4 } = require("uuid");

require("dotenv").config();
app.use(cors());
app.use(express.json());


app.get("/api/test", (req, res) => {

    res.send("Hello World");
}
);


app.listen(PORT, () => {
    console.log("Now listening on 🙄🙄🙄 " + PORT);
  });
