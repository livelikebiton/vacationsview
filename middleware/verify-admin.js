const jwt = require("jsonwebtoken");

function verifyAdmin(request, response, next) {

    if (!request.headers.authorization)
        return response.status(401).send("You are not logged in!");

    const token = request.headers.authorization.split(" ")[1];
    if (!token)
        return response.status(401).send("You are not logged in!");

    jwt.verify(token, config.jwtKey, (err, data) => {
        if (err && err.message === "jwt expired")
            return response.status(403).send("Your login session has expired.");

        if (err)
            return response.status(401).send("You are not logged in!");

        request.user = data.payload;
        if (!request.user.isAdmin)
            return response.status(403).send("You are not authorized.");

        next();
    });
}

module.exports = verifyAdmin;