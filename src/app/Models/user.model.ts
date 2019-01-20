export class UserModel {
  username;
  writtenArticles;
  likedArticles;
  isLoggedIn;

  constructor(userName) {
    this.username = userName;
    this.isLoggedIn = false;
    this.writtenArticles = new Array();
    this.likedArticles = [];
  }

  addPost(article) {
    this.writtenArticles.push(article);
  }

  checkLike(article) {
    return this.likedArticles.includes(article);
  }
}
