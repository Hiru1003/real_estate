import express from "express";

const app = express();

app.use("/api/test", (req,res) => {
    res.send("It works")  
})

app.listen(8000, () => {
    console.log("Server is running")
})