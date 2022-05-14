const express = require("express");
const jwt = require("jsonwebtoken");
const dbusers = require("./db");

const app = express();

app.use(express.json());

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.post("/login", (req, res) => {
    dbusers.map((user) => {
        if(user.username === req.body.username && user.password === req.body.password) {
            jwt.sign({user}, "secretkey", {expiresIn: "15s"}, (err, token) => {
                res.json({
                    token
                });
            });
        }
    })
});

app.post("/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (error, authData) => {
        if(error) {
            res.sendStatus(403);
        } else {
            res.json({
                mensaje: "Post creado",
                authData
            });
        }
    });
});

app.use(express.static("public"));

app.listen(3031, () => {
    console.log("Server on port 3031");
});

// levartar server con: npx nodemon index.js