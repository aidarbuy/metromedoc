import { computed, observable } from 'mobx';

class ArticlesStore {
  @observable articles = [];
  @observable filter = "";
  @computed get filteredArticles() {
    var matchesFilter = new RegExp(this.filter, "i");
    return this.articles.filter(article => !this.filter || matchesFilter.test(article.value));
  }
}

var articlesStore = window.articlesStore = new ArticlesStore;

export default articlesStore;