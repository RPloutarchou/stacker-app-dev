const db = require('./db');
const helper = require('../helper');

async function getUsersVouchers(uid) {
    const res = await db.query(
        `SELECT vid
        FROM vouchers WHERE uid = ${uid}`
    );

    let data = helper.emptyOrRows(res);
    return { data };
}

async function addVoucher(voucherData) {
    const res = await db.query(
        `INSERT INTO users (vid,uid)
        VALUES (${voucherData.vid},${voucherData.uid})`
    );

    let message = '';
    if (res.affectedRows) { message = 'Voucher Added Successfully!'; }
    else { message = 'Unable to Add Voucher!'; }
    return { message };
}

async function removeVoucher(vid) {
    const res = await db.query(
        `DELETE FROM vouchers WHERE vid = ${vid}`
    );

    let message = '';
    if (res.affectedRows) { message = 'Voucher Deleted Successfully!'; }
    else { message = 'Unable to Delete Voucher!'; }
    return { message };
}

module.exports = {
    getUsersVouchers,
    addVoucher,
    removeVoucher
}