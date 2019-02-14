import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Login } from '../auth/auth.actions';
import { AuthService } from '../auth/auth.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthState } from '../auth/auth.reducer';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;
  constructor(private store: Store<AuthState>, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      password: new FormControl()
  });
  }
// submit(form) {
//   this.auth.login(form.name, form.password)
//   .pipe(
//     tap( user => {
//       this.store.dispatch(new Login(user));
//       this.router.navigateByUrl('/main');
//     })
//   ).subscribe(
//     (user) => {
//     },
//     (err) => console.log(err)
//   );

// }

submit() {
  this.auth.login();
}
}
