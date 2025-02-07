const QuizModel = require('../models/quizModel')

const getRandomQuestions = async (req, res) => {
    try {
        const questions = await QuizModel.getRandomQuestions()
        res.json(questions)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAllQuestions = async (req, res) => {
    try {
        const questions = await QuizModel.getAllQuestions()
        res.json(questions)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getRandomQuestions,
    getAllQuestions
} 