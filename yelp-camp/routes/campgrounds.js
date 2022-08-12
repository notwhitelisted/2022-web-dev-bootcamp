if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
} 

const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds = require('../controllers/campgrounds')
const Campground = require('../models/campground');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

//index page
router.get('/', catchAsync(campgrounds.index));

//new page
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

//create page
router.post('/', isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))


//show page
router.get('/:id', catchAsync(campgrounds.showCampground));

//edit page
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))

//updating page
router.put('/:id', isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground));

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

module.exports = router;