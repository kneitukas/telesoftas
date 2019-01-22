import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthActions, Login, AuthActionTypes } from '../auth/auth.actions';


 interface AuthState {
  loggedIn: boolean;
  user;
}



export interface AppState {
  auth: AuthState;
}

function authReducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload
      };
      default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
auth: authReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
