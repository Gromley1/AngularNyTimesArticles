import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles;

  constructor(private Articles: ArticlesService) { }


  ngOnInit() {
    this.Articles.getArticles()
      .subscribe(data => {
        this.articles = data['results']
      })
  }

}
