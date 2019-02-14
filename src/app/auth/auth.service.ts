import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: 'n86HtuVgI3P08dp30koF3kkRh7mZveUK',
    domain: 'dev-0x-ciog8.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(private http: HttpClient, public router: Router ) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  // login (name, password): Observable<any> {
  //   return this.http.get('http://localhost:3000/login');
  // }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }
}
