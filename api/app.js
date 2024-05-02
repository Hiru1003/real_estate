import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);


app.listen(8000, () => {
    console.log("Server is running")
})



//console-ninja node --watch app.js
//console-ninja node --env-file .env  --watch app.js
