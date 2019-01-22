import { Injectable, OnInit } from '@angular/core';
import { Article } from '../Models/article.model';
import { UserModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentUser: UserModel;
  articles = [];
  users = [];
  id = 0;

  constructor() {
    this.users = [
      new UserModel('Tomas'),
      new UserModel('Dainius'),
      new UserModel('Agne'),
      new UserModel('Andrius'),
      new UserModel('Kestas'),
    ];
    this.logIn('Tomas');
  }

  logIn(name) {
   const filtered = this.users.filter(user => {
      return user.username === name;
   });

    this.currentUser = filtered[0];
    this.currentUser.isLoggedIn = true;
  }

  addArticle(article) {
    this.articles.push(
      new Article(this.id, article, this.currentUser.username)
    );
    this.currentUser.addPost(
      new Article(this.id, article, this.currentUser.username)
    );
    this.id++;
  }

  addLike(article) {
    const liked = this.currentUser.checkLike(article);

    if (liked) {
      const filter = this.currentUser.likedArticles.filter(val => {
        return val.id !== article.id;
      });
      this.currentUser.likedArticles = filter;
      this.articles[article.id].likes--;
    } else {
      this.currentUser.likedArticles.push(article);
      this.articles[article.id].likes++;
    }
  }
}
