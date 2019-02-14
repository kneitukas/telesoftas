import {
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreService } from './store/store.service';
import { Store, select } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { AppState } from './reducers';
import { selectAuthState } from './auth/auth.selectors';
import { of, range, concat } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  articles;
  form: FormGroup;

  constructor(private store: StoreService, private ngStore: Store<AppState>) {
    this.articles = store.articles;
  }

  ngOnInit() {
    this.form = new FormGroup({
      article: new FormControl()
    });

    this.ngStore
    .pipe(
      // map(state => state.auth.loggedIn)
      select(selectAuthState)
    ).subscribe(
      loggedIn => console.log(loggedIn)
    );

  }

  addArticle(val) {
    this.store.addArticle(val.article);
    this.form.reset();
  }

  addLike(article) {
    this.store.addLike(article);
  }
}



