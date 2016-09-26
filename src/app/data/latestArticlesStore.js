import {observable} from 'mobx';
import {database} from './firebase';

class LatestArticles {
  @observable articles = [];
  @observable filter = "";

  constructor() {
    const articlesRef = database.ref('/articles').orderByKey().limitToLast(4);
    articlesRef.once('value').then(snapshot => {
      const snapshotValue = snapshot.val();
      var articles = [];
      Object.keys(snapshotValue).map(keyName => articles.push(snapshotValue[keyName]));
      this.articles = articles;
    })
  }
}

var latestArticles = new LatestArticles();

export default latestArticles;