const express = require('express');
const router = express.Router();
const vouchers = require('../services/vouchers');

router.get('/GetUserVouchers/:uid', async function(req,res,next) {
    try { res.json(await vouchers.getUsersVouchers(req.params.uid)); }
    catch (error) { console.error(`Error While Getting User's Vouchers: `, error.message); next(error); }
});

router.post('/Add', async function(req,res,next) {
    try { res.json(await  vouchers.addVoucher(req.body)); }
    catch (error) { console.error('Error While Adding Voucher: ', error.message); next(error); }
});

router.delete('/Remove/:uid', async function(req,res,next) {
    try { res.json(await  vouchers.removeVoucher(req.params.uid)); }
    catch (error) { console.error('Error While Removing Voucher: ', error.message); next(error); }
});

module.exports = router;