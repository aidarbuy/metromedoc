import { Component, PropTypes } from 'react';
import Title from 'react-title-component';
import CircularProgress from 'material-ui/CircularProgress';
import { database } from '../../../data/firebase';
import ArticleCard from '../../cards/ArticleCard';

export default class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = { articles: [] };
	}

	componentWillMount() {
    database.ref('/articles').once('value').then((dataSnapshot) => {
      const articles = dataSnapshot.val().reverse();
      this.setState({articles});
    });
	}

	render() {
		const { articles } = this.state;

		return (
			<section>
				<Title render={previousTitle => `Articles - ${previousTitle}`} />

				<div className="flex-container" style={{ marginTop: 20 }}>
					{articles.length === 0 ?
          <CircularProgress style={{ margin: '50px auto' }}/> :
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
			</section>
		);
	}
};