import ArticleCard from '../cards/ArticleCard';
import CircularProgress from 'material-ui/CircularProgress';
import { database } from '../../data/firebase';
// import Helmet from 'react-helmet';
import Title from 'react-title-component';
import React, { Component } from 'react';

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = { articles:[] };
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
				{/*<Helmet title="Articles - MetromedUC" />*/}
				<Title render={(previousTitle) => `Articles - ${previousTitle}`} />

				<div className="flex-container" style={{ marginTop:20 }}>
					{articles.length === 0 ?
          <CircularProgress style={{marginLeft:'auto', marginRight:'auto'}}/> :
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
}

Articles.contextTypes = {
	muiTheme: React.PropTypes.object,
	store: React.PropTypes.object,
};

export default Articles;