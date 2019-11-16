import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  apiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json'
  apiKey = 'PpaXrCXZer0QXYWtCYEmryDQ0tmxLoZH'

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${this.apiUrl}?api-key=${this.apiKey}`)
  }
}
