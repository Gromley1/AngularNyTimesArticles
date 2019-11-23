import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles;
  articleQuery;


  constructor(private Articles: ArticlesService) { }

  ngOnInit() {
    this.Articles.getArticles()
      .subscribe(data => {
        this.articles = data['results']
      })

    this.Articles.searchArticles()
      .subscribe(data => {
        this.articleQuery = data['response'].docs
        console.log(this.articleQuery)
      })

  }
}
