import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Logout } from '../auth/auth.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isLoggedIn } from '../auth/auth.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isloggedIn$: Observable<boolean>;
  articles;
  form: FormGroup;

  constructor(private store: StoreService, private ngStore: Store<AppState>, private router: Router) {
    this.articles = store.articles;
  }

  ngOnInit() {
    this.form = new FormGroup({
      article: new FormControl()
    });

   this.isloggedIn$ = this.ngStore
    .pipe(
      select(isLoggedIn)
    );
  }

  addArticle(val) {
    this.store.addArticle(val.article);
    this.form.reset();
  }

  addLike(article) {
    this.store.addLike(article);
  }

  logout() {
    this.ngStore.dispatch(new Logout());
    this.router.navigateByUrl('/');
  }
}


