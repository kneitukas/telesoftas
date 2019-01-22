import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Login } from '../auth/auth.actions';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;
  constructor(private store: Store<AppState>, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      password: new FormControl()
  });
  }
submit(form) {
  this.auth.login(form.name, form.password)
  .pipe(

    tap( user => {
      this.store.dispatch(new Login({user}));
      this.router.navigateByUrl('/main');
    })
  ).subscribe(
    (user) => {
      console.log(user);
    },
    (err) => console.log(err)
  );

}
}
