const express = require("express");
const followLogic = require("../business-logic-layer/follows-logic");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const router = express.Router();

router.post("/", verifyLoggedIn, async (request, response) => {
    const {userId} = request.user;
    const {vacationId} = request.body;
    try {
        const addedFollow = await followLogic.addFollowAsync(userId, vacationId);
        response.status(201).json(addedFollow);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.delete("/:vacationId", verifyLoggedIn, async (request, response) => {
    const {userId} = request.user;
    const {vacationId} = request.params;
    try {
        await followLogic.deleteFollowAsync(userId, vacationId);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;