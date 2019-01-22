import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  articles;
  form: FormGroup;

  constructor(private store: StoreService, private ngStore: Store<AppState>) {
    this.articles = store.articles;
    ngStore.subscribe();
  }

  ngOnInit() {
    this.form = new FormGroup({
      article: new FormControl()
    });
  }

  addArticle(val) {
    this.store.addArticle(val.article);
    this.form.reset();
  }

  addLike(article) {
    this.store.addLike(article);
  }
}


