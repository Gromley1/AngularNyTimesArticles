import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  apiUrl = 'https://api.nytimes.com/svc/'
  apiKey = 'api-key'

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${this.apiUrl}mostpopular/v2/viewed/1.json?api-key=${this.apiKey}`)
  }

  searchArticles() {
    return this.http.get(`${this.apiUrl}search/v2/articlesearch.json?api-key=${this.apiKey}&q=clinton`)
  }
}
