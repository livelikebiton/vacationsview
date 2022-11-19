const dal = require("../data-access-layer/dal");

async function addFollowAsync(userId, vacationId) {
    const sql = `INSERT INTO follows(userId, vacationId)
                VALUES(?,?)`;
    const info = await dal.executeAsync(sql, [userId, vacationId]); 
    info.id = info.insertId;
    return info;
}

async function deleteFollowAsync(userId, vacationId) {
    const sql = `DELETE FROM follows WHERE userId = ? AND vacationId = ?`;
    await dal.executeAsync(sql, [userId, vacationId]);  
}

module.exports = {
    addFollowAsync,
    deleteFollowAsync
};