import {observable} from 'mobx';
import {database} from './firebase';
// import _ from 'lodash';

class LatestArticles {
  @observable articles = [];
  @observable filter = "";

  constructor() {
    const articlesRef = database.ref('/articles').orderByKey().limitToLast(4);
    articlesRef.once('value').then(snapshot => {
      const snapshotVal = snapshot.val();
      var articles = [];
      Object.keys(snapshotVal).map(keyName => articles.push(snapshotVal[keyName]));
      // _.values(snapshotVal).map(keyName => articles.push(snapshotVal[keyName]));
      this.articles = articles.reverse();
    })
  }
}

var latestArticles = new LatestArticles();

export default latestArticles;