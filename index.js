const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("App started");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
