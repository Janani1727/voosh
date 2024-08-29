const express = require("express")
const { UserModel } = require("../model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const { username, email, password} = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            res.send({ "msg": "Already have an account please login" })

        } else {
            bcrypt.hash(password, 9, async (err, hash) => {
                if (err) {
                    res.send("Something went wrong")
                } else {
                    const user = new UserModel({ username, email, password: hash })
                    await user.save()
                    res.send({ "msg": "new user has been register" })
                }
            });
        }

    } catch (err) {
        res.send({ "msg": "Can't register" })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, "onemg")
                    res.send({ "msg": "Login sucessful", token, username: user[0].username, type: user[0].type })
                } else {
                    res.send({ "msg": "Something went wrong" })
                }
            });
        } else {
            res.send({ "msg": "Wrong crediential" })
        }
    } catch (err) {
        res.send({ "msg": "Something Wrong" })
    }
})

module.exports = {
    userRouter
}