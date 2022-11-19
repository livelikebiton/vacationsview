const dal = require("../data-access-layer/dal");


async function getAllUserAsync() {
    const sql = `SELECT * FROM users`;
    const users = await dal.executeAsync(sql);
    return users;
}

async function isUsernameTakenAsync(username) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    const users = await dal.executeAsync(sql, [username]);
    return users.length > 0; // ?
}

async function getOneUserAsync(id) {
    const sql = `SELECT * FROM users WHERE userId = "?"`;
    const users = await dal.executeAsync(sql, [id]);
    return users[0];
}

async function updateUserAsync(user) {
    const sql = `UPDATE users SET firstName = '?',
                lastName = '?', username = '?' WHERE userId = ?`;
    const info = await dal.executeAsync(sql , [user.firstName, user.lastName, user.username, user.userId]);
    return info.affectedRows === 0 ? null : user;
}

module.exports = {
    getAllUserAsync,
    isUsernameTakenAsync,
    getOneUserAsync,
    updateUserAsync
};