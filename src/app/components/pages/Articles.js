import {observer} from 'mobx-react';
import {Component} from 'react';
import Title from 'react-title-component';
import articlesStore from '../../data/articlesStore';
import CircularProgress from 'material-ui/CircularProgress';
import ArticleCard from '../cards/ArticleCard';

@observer class Articles extends Component {
	render() {
		return (
			<section>
				<Title render={previousTitle => `Articles - ${previousTitle}`} />

				<div className="flex-container" style={{marginTop: 20}}>
          {articlesStore.articles.length === 0 ?
            <CircularProgress style={{margin:'20px auto'}}/> :
            articlesStore.articles.map((article, i) => (
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
			</section>
		);
	}
}

export default Articles;