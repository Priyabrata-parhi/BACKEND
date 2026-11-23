const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

authRouter.post('/register',(req,res) => {
    const {name, email, password} = req.body

    const isEmailAlreadyExist = userModel.findOne({email})

    if(isEmailAlreadyExist){
        return res.status(401).json({
            message: "Email Is Already Exist"
        })
    }

    const user = userModel.create({
        name, email, password
    })

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("JWT",token)

    res.status(201).json({
        message: "User register "
    })

})


module.exports = authRouter