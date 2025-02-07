const pool = require('../config/db')

class QuizModel {
    static async getRandomQuestions(limit = 5) {
        const query = 'SELECT * FROM questions ORDER BY RANDOM() LIMIT $1'
        const result = await pool.query(query, [limit])
        return result.rows
    }

    static async getAllQuestions() {
        const query = 'SELECT * FROM questions'
        const result = await pool.query(query)
        return result.rows
    }
}

module.exports = QuizModel 