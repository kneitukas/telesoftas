import { Action } from '@ngrx/store';
import { MainActionTypes, MainActions } from './main.actions';


export interface MainState {
articles: [];
likes: [];
}

export const initialState: MainState = {
articles: [],
likes: []
};

export function reducer(state = initialState, action: MainActions): MainState {
  switch (action.type) {

    case MainActionTypes.LoadArticles:
    return this.articles;
    case MainActionTypes.AddArticle:
    return this.articles.push(action.payload);
    case MainActionTypes.AddLike:
    return this.likes.push(action.payload);
    default:
      return state;
  }
}
