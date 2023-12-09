import "dotenv/config";
import cors from "cors";
import express from "express";
import { connectDB } from "./db/db.js";
import userMsgRoute from "./routes/userMsgRoute.js";

const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        exposedHeaders: ["X-Total-Count"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);

app.use("/api", userMsgRoute);
app.get("/", (req, res) => {
    res.send("App started");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
