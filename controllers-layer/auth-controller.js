const express = require("express");
const UserModel = require("../models/user-model");
const authLogic = require("../business-logic-layer/auth-logic");
const userLogic = require("../business-logic-layer/users-logic");
const errorsHelper = require("../helpers/errors-helper");
const router = express.Router();


router.post("/register", async (request, response) => {
    try {
        const addUser = new UserModel(request.body);

        const errors = addUser.validateRegister();
        if(errors) return response.status(400).send(errors);

        if(await userLogic.isUsernameTakenAsync(addUser.username))
            return response.status(400).send(`Username "${addUser.username}" already taken.`);
        
        const addedUser = await authLogic.registerAsync(request.body);
        response.status(201).json(addedUser);
    }
    catch (err) {
        console.error(err)
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.post("/login", async (request, response) => {
    try {
        const loginToUser = new UserModel(request.body);
        const errors = loginToUser.validateLogin();
        if(errors) return response.status(400).send(errors);
        const loggedInUser = await authLogic.loginAsync(request.body);
        if (!loggedInUser) return response.status(401).send("Incorrect username or password.");
        response.json(loggedInUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;