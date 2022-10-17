const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    res.json({
        name: "Phong",
        age: 20,
    });
});
app.get("/init", (req, res) => {
    res.status(403).json({
        error: 403,
        message: "You are not authorized to access this resource",
    });
});
app.listen(3456, () => {
    console.log("app listening at : http://localhost:3456");
});
