global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const socketHelper = require("./helpers/socket-helper");

const authController = require("./controllers-layer/auth-controller");
const usersController = require("./controllers-layer/users-controller");
const vacationsController = require("./controllers-layer/vacations-controller");
const followController = require("./controllers-layer/follow-controller");

const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload());

server.use(express.static(path.join(__dirname, "./frontend")));

server.use("*" , (request , response) => {
    response.sendFile(path.join(__dirname, "./frontend/index.html"));
});

server.use("/api/auth/", authController);
server.use("/api/users/", usersController);
server.use("/api/vacations/", vacationsController);
server.use("/api/follows/", followController);

const expressListener = server.listen(3001, () => console.log("Listening..."));
socketHelper.init(expressListener)
