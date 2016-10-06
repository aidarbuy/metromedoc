import {observer} from 'mobx-react';
import {Component} from 'react';
import Title from 'react-title-component';
import articlesStore from '../../../data/articlesStore';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import ArticleCard from '../../cards/ArticleCard';

@observer class Articles extends Component {
	render() {
		return (
			<section className="container-fluid">
				<Title render={previousTitle => `Articles - ${previousTitle}`} />

				<div className="row">
          {articlesStore.articles.length === 0 ?
						<LinearProgress style={{marginTop:50}}/> :
						articlesStore.articles.map((article, i) => (
            <div key={i} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 margin-top">
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