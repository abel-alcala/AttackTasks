import express from "express";
import { Info } from "./userModel.js";

const router = express.Router();

router.post("/register", async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Needs Email & Password" });
    }
    const existingUser = await Info.findOne({
        $or: [{ email: email }]
    });

    if (existingUser) {
        return res.status(400).json({
            message:
                existingUser.email === req.body.email
                    ? "Email already exists"
                    : "Username already taken",
        });
    }

    const user = {
        email,
        password
    };
    const userResponse = await Info.create(user);
    userResponse.toObject();
    res.status(201).json({
        message: "User created successfully",
        user: userResponse
    });

});

export default router;