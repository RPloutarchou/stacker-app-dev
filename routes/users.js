const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.get('/All', async function(req,res,next) {
    try { res.json(await users.allUsers()); }
    catch (error) { console.error(`Error While Listing Users: `, error.message); next(error); }
});

router.get('/FindByID/:uid', async function(req,res,next) {
    try { res.json(await users.findUserByID(req.params.uid)); }
    catch (error) { console.error(`Error While Searching User With ID: `, error.message); next(error); }
});

router.get('/FindByEmail/:email', async function(req,res,next) {
    try { res.json(await users.findUserByEmail(req.params.email)); }
    catch (error) { console.error(`Error While Searching User With Email: `, error.message); next(error); }
});

router.post('/Add', async function(req,res,next) {
   try { res.json(await  users.addUser(req.body)); }
   catch (error) { console.error('Error While Adding User: ', error.message); next(error); }
});

router.delete('/Remove/:uid', async function(req,res,next) {
    try { res.json(await  users.removeUser(req.params.uid)); }
    catch (error) { console.error('Error While Removing User: ', error.message); next(error); }
});

router.put('/UpdateCoins', async function(req,res,next) {
    try { res.json(await  users.updateCoins(req.body)); }
    catch (error) { console.error('Error While Updating User Balance: ', error.message); next(error); }
});

router.put('/UpdateScore', async function(req,res,next) {
    try { res.json(await  users.updateScore(req.body)); }
    catch (error) { console.error('Error While Updating User Score: ', error.message); next(error); }
});

module.exports = router;