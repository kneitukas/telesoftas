import { Action } from '@ngrx/store';
import { AuthActionTypes, Login, AuthActions } from './auth.actions';



export interface AuthState {
loggedIn;
user;
}

export const initialAuthState: AuthState = {
loggedIn: false,
user: undefined
};

export function reducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
    return {
      loggedIn: true,
      user: action.payload
    };
    case AuthActionTypes.LogoutAction:
    return {
      loggedIn: false,
      user: undefined
    };
    default:
      return state;
  }
}
