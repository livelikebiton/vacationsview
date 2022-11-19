const dal = require("../data-access-layer/dal");
const jwtHelper = require("../helpers/jwt-helper");
const cryptoHelper = require("../helpers/crypto-helper");

async function registerAsync(user) {
    const passwordHash = cryptoHelper.hash(user.password);
    const sql = `INSERT INTO users(firstName ,lastName ,username, password)
    VALUES (?,?,?,?)`;
    const info = await dal.executeAsync(sql, [user.firstName, user.lastName, user.username , passwordHash]);
    user.userId = info.insertId;
    user.isAdmin = 0;
    user.token = jwtHelper.getNewToken(user);
    delete user.password;
    return user;
}

async function loginAsync(credentials) {
    const passwordHash = cryptoHelper.hash(credentials.password);
    const sql = "SELECT userId, firstName, lastName, username, isAdmin FROM users WHERE username = ? AND password = ?";
    const users = await dal.executeAsync(sql, [credentials.username, passwordHash]);
    if (users.length === 0) return null;
    const user = users[0];
    user.token = jwtHelper.getNewToken(user);
    return user;
}


module.exports = {
    registerAsync,
    loginAsync
}