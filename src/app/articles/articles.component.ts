import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles;
  q: string


  constructor(private Articles: ArticlesService) { }

  ngOnInit() {

  }

  onKeyChange() {
    this.queryArticles(this.q)
  }


  queryArticles(q) {
    this.Articles.searchArticles(q)
      .subscribe(data => {
        this.articles = data['response'].docs
        console.log(this.articles)
        //console.log(q)
      })
  }

}




