import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  score = 0;
  showResult = false;
  selectedAnswer: string | null = null;
  isAnswered = false;
  isCorrect = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.quizService.getRandomQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

  get currentQuestion(): Question | undefined {
    return this.questions[this.currentQuestionIndex];
  }

  checkAnswer(selectedOption: string): void {
    if (this.isAnswered) return;
    
    this.selectedAnswer = selectedOption;
    this.isAnswered = true;
    
    if (selectedOption === this.currentQuestion?.correct_answer) {
      this.score++;
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestion();
    } else {
      this.showResult = true;
    }
  }

  resetQuestion(): void {
    this.selectedAnswer = null;
    this.isAnswered = false;
    this.isCorrect = false;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.showResult = false;
    this.resetQuestion();
    this.loadQuestions();
  }

  getOptions(): string[] {
    if (!this.currentQuestion) return [];
    return [
      this.currentQuestion.option1,
      this.currentQuestion.option2,
      this.currentQuestion.option3,
      this.currentQuestion.option4
    ];
  }

  calculatePercentage(): number {
    if (this.questions.length === 0) return 0;
    return Math.round((this.score / this.questions.length) * 100);
  }
}
