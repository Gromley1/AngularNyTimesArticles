import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles;

  constructor(private Articles: ArticlesService) { }

  ngOnInit() {
    this.Articles.getArticles()
      .subscribe(data => {
        this.articles = data
        this.articles = this.articles.results
        console.log(this.articles)
      })
  }
}
