const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const catchAsync = require('../utilities/catchAsync');
const ExpressError = require('../utilities/ExpressError');

//create review
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

//delete review
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;