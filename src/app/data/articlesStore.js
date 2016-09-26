import {computed, observable} from 'mobx';
import {database} from './firebase';

class Articles {
  @observable articles = [];
  @observable filter = "";

  constructor() {
    database.ref('/articles').once('value').then(snapshot => {
      this.articles = snapshot.val().reverse();
    });
  }

  @computed get filteredArticles() {
    var matchesFilter = new RegExp(this.filter, "i");
    return this.articles.filter(article => !this.filter || matchesFilter.test(article.value));
  }
}

var articles = window.articles = new Articles();

export default articles;