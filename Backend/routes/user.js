const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const {Account} = require("../db")


const JWT_SECRET = "Ronaldo is GOAT";
router.post("/signup", async (req, res) => {
    console.log("request initiated");

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;



    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

router.post("/signin", async (req, res) =>{
 
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
        res.json({
            token:token
        })
        return;
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})
