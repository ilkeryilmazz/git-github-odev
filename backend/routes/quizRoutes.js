const express = require('express')
const router = express.Router()
const { getRandomQuestions, getAllQuestions } = require('../controllers/quizController')

router.get('/random', getRandomQuestions)
router.get('/all', getAllQuestions)

module.exports = router 