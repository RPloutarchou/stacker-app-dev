const db = require('./db');
const helper = require('../helper');

async function allUsers() {
    const res = await db.query(
        `SELECT username, email, photo, coins, score
        FROM users`
    );

    let data = helper.emptyOrRows(res);
    return { data };
}

async function findUserByID(uid) {
    const res = await db.query(
        `SELECT username, email, photo, coins, score
        FROM users WHERE uid = ${uid}`
    );

    let data = helper.emptyOrRows(res);
    return { data };
}

async function findUserByEmail(email) {
    const res = await db.query(
        `SELECT username, email, photo, coins, score
        FROM users WHERE email = "${email}"`
    );

    let data = helper.emptyOrRows(res);
    return { data };
}

async function addUser(userData) {
    const res = await db.query(
        `INSERT INTO users (uid,username,email,coins,score)
        VALUES (${userData.user.uid},"${userData.user.username}","${userData.user.email}",${userData.user.coins},${userData.user.score})`
    );

    let message = '';
    if (res.affectedRows) { message = 'User Added Successfully!'; }
    else { message = 'Unable to Add User!'; }
    return { message };
}

async function removeUser(id) {
    const res = await db.query(
        `DELETE FROM users WHERE uid = ${id}`
    );

    let message = '';
    if (res.affectedRows) { message = 'User Deleted Successfully!'; }
    else { message = 'Unable to Delete User!'; }
    return { message };
}

async function updateCoins(balanceData) {
    const res = await db.query(
        `UPDATE users SET coins=${balanceData.coins}
        WHERE uid=${balanceData.uid}`
    );

    let message = '';
    if (res.affectedRows) { message = 'Balance Updated Successfully!'; }
    else { message = 'Unable to Update User Balance!'; }
    return { message };
}

async function updateScore(pointsData) {
    const res = await db.query(
        `UPDATE users SET score=${pointsData.points}
        WHERE uid=${pointsData.uid}`
    );

    let message = '';
    if (res.affectedRows) { message = 'Score Updated Successfully!'; }
    else { message = 'Unable to Update User Score!'; }
    return { message };
}

module.exports = {
    allUsers,
    addUser,
    removeUser,
    findUserByID,
    findUserByEmail,
    updateScore,
    updateCoins
}