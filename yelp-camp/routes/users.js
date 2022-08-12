const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const catchAsync = require('../utilities/catchAsync');
const users = require('../controllers/users');

//renders register form 
router.get('/register', users.renderRegister);

//register user
router.post('/register', catchAsync(users.registerUser));

//renders login form
router.get('/login', users.renderLogin);

//user login
router.post('/login', passport.authenticate('local', { failureFlash : true, failureRedirect: '/login'}), users.login);

//user logout
router.get('/logout', users.logoutUser);

module.exports = router; 

