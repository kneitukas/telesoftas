import { createSelector } from '@ngrx/store';

export const selectAuthState = state => state.main;

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);
