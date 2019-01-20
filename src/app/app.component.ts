import {
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articles;
  form: FormGroup;

  constructor(private store: StoreService) {
    this.articles = store.articles;

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
