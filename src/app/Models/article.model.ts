export class Article {
  id;
  author;
  likes;

  constructor(id, public description, author) {
    this.id = id;
    this.likes = 0;
    this.author = author;
  }
}
