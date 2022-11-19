const express = require("express");
const usersLogic = require("../business-logic-layer/users-logic");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const UserModel = require("../models/user-model");
const errorsHelper = require("../helpers/errors-helper");
const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const users = await usersLogic.getAllUserAsync();
        response.json(users);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const user = await usersLogic.getOneUserAsync(id);
        if (!user) return response.status(404).send("User not found.");
        response.json(user);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.put("/:id",verifyLoggedIn, async (request, response) => {
    try {
        const id = request.params.id;
        const userToUpdate = new UserModel(request.body);
        userToUpdate.userId = id;

        const errors = userToUpdate.validateEdit();
        if(errors) return response.status(400).send(errors);

        const updatedUser = await usersLogic.updateUserAsync(userToUpdate);
        if (!updatedUser) return response.status(404).send("User not found.");

        response.json(updatedUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;