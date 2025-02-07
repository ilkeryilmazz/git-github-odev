import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://127.0.0.1:3001/api/quiz';

  constructor(private http: HttpClient) { }

  getRandomQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/random`);
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/all`);
  }
}
