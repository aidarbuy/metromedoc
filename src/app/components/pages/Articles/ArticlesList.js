import {observer} from 'mobx-react';
import {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ArticleCard from '../../cards/ArticleCard';

@observer class ArticlesView extends Component {
  render() {
    const {articles} = this.props.store;

    return (
      <div className="flex-container" style={{marginTop: 20}}>
        {articles.length === 0 ?
          <CircularProgress style={{margin: '50px auto'}}/> :
          articles.map((article, i) => (
            <div className="articles-item" key={i}>
              <ArticleCard
                title    = { article.title }
                subtitle = { article.date }
                image 	 = { article.img.src }
                href 	 	 = { article.img.href }
                teaser   = { article.teaser }
              />
            </div>
          ))}
      </div>
    );
  }
}

export default ArticlesView;