const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = new User({ name, age });
        await user.save();
        res.status(200).send({ msg: "user added" });
    } catch (error) {
        res.status(500).send("impossible to add user");
    }
});
router.get("/user", User);
module.exports = router;
