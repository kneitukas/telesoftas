import { Action } from '@ngrx/store';

export enum MainActionTypes {
  LoadArticles = '[LoadArticles] action',
  AddArticle = '[AddArticle] action',
  AddLike = '[AddLike] action'
}

export class LoadArticles implements Action {
  readonly type = MainActionTypes.LoadArticles;
}

export class AddArticle implements Action {
  readonly type = MainActionTypes.AddArticle;
    constructor(public payload: {article}) {}
}

export class AddLike implements Action {
  readonly type = MainActionTypes.AddLike;
  constructor(public payload: {like}) {}
}

export type MainActions = LoadArticles | AddArticle | AddLike ;
