const express = require("express");
var path = require("path");
const compression = require("compression");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/work", (req,res) => {
    res.sendFile(path.join(__dirname, "work.html"));
});
app.get("/contactMe", (req,res) => {
    res.sendFile(path.join(__dirname, "contactMe.html"));
});
app.get("/aboutMe", (req,res) => {
    res.sendFile(path.join(__dirname, "aboutMe.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
   