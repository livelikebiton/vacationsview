const express = require("express");
const vacationsLogic = require("../business-logic-layer/vacations-logic");
// const followsLogic = require("../business-logic-layer/follows-logic");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const verifyAdmin = require("../middleware/verify-admin");
const socketHelper = require("../helpers/socket-helper");
const VacationModel = require("../models/vacation-model");
const errorsHelper = require("../helpers/errors-helper");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/",verifyLoggedIn, async (request, response) => {
    const { userId } = request.user
    try {
        const vacations = await vacationsLogic.getAllVacationsAsync(userId);
        response.json(vacations);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.get("/:id",verifyLoggedIn, async (request, response) => {
    try {
        const id = request.params.id;
        const vacation = await vacationsLogic.getOneVacationsAsync(id);
        response.json(vacation);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.post("/",verifyAdmin, async (request, response) => {
    try {
        const vacationToAdd = new VacationModel(request.body);
        const errors = vacationToAdd.validatePost();
        if(errors) return response.status(400).send(errors);
        
        const image = request.files && request.files.image ? request.files.image : null;
        if(!image) return response.status(400).send("Missing image.");

        const newVacation = await vacationsLogic.addNewVacationAsync(vacationToAdd, image);
        response.status(201).json(newVacation);
        socketHelper.vacationAdded(newVacation);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.put("/:id",verifyAdmin, async (request, response) => {
    try {
        const id = +request.params.id;
        const vacationToUpdate = new VacationModel(request.body);
        vacationToUpdate.vacationId = id;

        const errors = vacationToUpdate.validatePut();
        if(errors) return response.status(400).send(errors);

        const image = request.files && request.files.image ? request.files.image : null;

        const updateVacation = await vacationsLogic.updateVacationAsync(vacationToUpdate, image);
        if (!updateVacation) return response.status(404).send("vacation not found.");
        response.json(updateVacation);
        socketHelper.vacationUpdated(updateVacation);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        await vacationsLogic.deleteVacation(id);
        response.sendStatus(204);
        socketHelper.vacationDeleted(id);
    }
    catch(err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

router.get("/images/:name", (request, response) => {
    try {
        const name = request.params.name;
        let absolutePath = path.join(__dirname, "..","assets", "images", "vacations", name);
        if (!fs.existsSync(absolutePath)) {
            absolutePath = path.join(__dirname, "..","assets", "images", "not-found.jpg");
        }
        response.sendFile(absolutePath);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;