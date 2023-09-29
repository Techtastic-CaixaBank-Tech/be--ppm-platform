import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Techtastic 🎯")
});

app.listen(3000, () => console.log("App runing!"));