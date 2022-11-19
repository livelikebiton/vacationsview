const dal = require("../data-access-layer/dal");
const path = require("path");
const filesHelper = require("../helpers/files-helper");

async function getAllVacationsAsync(userId) {
    const sql = `SELECT V.*, F.follows FROM (SELECT v.vacationId, destination,
        DATE_FORMAT(dateFrom,"%y-%m-%d") AS dateFrom,
        DATE_FORMAT(dateTo,"%y-%m-%d") AS dateTo, vacationPrice,
        description, imageName,
        IF(f.userId is null, false, true) AS isFollowing
        FROM vacations v left join follows f ON
        v.vacationId = f.vacationId
        AND f.userId= ?) V
        inner join (SELECT vacationId, count(*) as follows
        from follows group by vacationId) F on V.vacationId = F.vacationId ORDER BY isFollowing DESC`;
    const vacations = await dal.executeAsync(sql, [userId]);
    return vacations;
}

async function getOneVacationsAsync(vacationId) {
    const sql = `SELECT vacationId,description,
                DATE_FORMAT(dateFrom,"%Y-%m-%d") AS dateFrom,
                DATE_FORMAT(dateTo,"%Y-%m-%d") AS dateTo,
                vacationPrice,destination,imageName
                FROM vacations WHERE vacationId = ?`;
    const vacations = await dal.executeAsync(sql, [vacationId]);
    return vacations[0];
}

async function addNewVacationAsync(vacation, image) {
    const sql = `INSERT INTO vacations(destination, dateFrom, dateTo, vacationPrice, description)
    VALUES(?, ?, ?, ?, ?)`;

    const info = await dal.executeAsync(sql, [vacation.destination, vacation.dateFrom, vacation.dateTo, vacation.vacationPrice, vacation.description]);
    vacation.vacationId = info.insertId;

    const extension = image.name.substr(image.name.lastIndexOf("."));
    const fileName = vacation.vacationId + extension;

    const sql2 = `UPDATE vacations 
                  SET imageName='${fileName}'
                  WHERE vacationId=?`;
    const info2 = await dal.executeAsync(sql2, [vacation.vacationId]);

    vacation.imageName = fileName;
    const absolutePath = path.join(__dirname, "..", "assets", "images", "vacations", fileName);
    await image.mv(absolutePath);

    return vacation;
}

async function updateVacationAsync(vacation, image) {
    let sql = `UPDATE vacations SET
                destination=?,
                dateFrom=?,
                dateTo=?,
                vacationPrice = ?,
                description=?
                WHERE vacationId =?`;

    if (image) {
        const extension = image.name.substr(image.name.lastIndexOf("."));
        const fileName = vacation.vacationId + extension;

        sql = `UPDATE vacations SET
                    imageName='${fileName}',
                    destination=?,
                    dateFrom=?,
                    dateTo=?,
                    vacationPrice = ?,
                    description=?
                    WHERE vacationId =?`;

        vacation.image = fileName;
        const absolutePath = path.join(__dirname, "..", "assets", "images", "vacations", fileName);
        await image.mv(absolutePath);
    }

    const info = await dal.executeAsync(sql, [vacation.destination, vacation.dateFrom, vacation.dateTo, vacation.vacationPrice, vacation.description, vacation.vacationId]);

    return info.affectedRows === 0 ? null : vacation;
}

async function deleteVacation(id) {
    const sql = `DELETE FROM vacations WHERE vacationId = ?`;
    await dal.executeAsync(sql, [id]);

    const fileName = id + ".jpg";
    const absolutePath = path.join(__dirname, "..", "assets", "images", "vacations", fileName);
    filesHelper.safeDelete(absolutePath);
}

module.exports = {
    getAllVacationsAsync,
    getOneVacationsAsync,
    addNewVacationAsync,
    updateVacationAsync,
    deleteVacation
};