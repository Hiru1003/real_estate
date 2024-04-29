import express from "express";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use("api/posts", postRouter);
app.use("api/auth", authRouter);


app.listen(8000, () => {
    console.log("Server is running")
})