import {observer} from 'mobx-react';
import {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import latestArticlesStore from '../../../data/latestArticlesStore';
import CircularProgress from 'material-ui/CircularProgress';
import ArticleCard from '../../cards/ArticleCard';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';

@observer class LatestArticles extends Component {
	render() {
		const {canvasColor} = this.props;

		return (
			<Paper style={{marginTop: 20}}>
				<Toolbar>
					<ToolbarGroup style={{marginLeft: 'auto', marginRight: 'auto'}}>
						<ToolbarTitle text="Latest Articles"/>
					</ToolbarGroup>
				</Toolbar>

				<div className="flex-container" style={{ marginTop:0 }}>
          {latestArticlesStore.articles.length === 0 ?
            <CircularProgress style={{margin:'50px auto'}}/> :
            latestArticlesStore.articles.map((article, i) => (
              <div className="home-articles-item" key={i}>
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

				<Toolbar style={{width:'100%', background:canvasColor}}>
					<ToolbarGroup style={{width:'100%', textAlign:'center'}}>
						<RaisedButton
              label="All Articles"
							containerElement={<Link to="/articles"/>}
							fullWidth={true}
              secondary={true}
							style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}
						/>
					</ToolbarGroup>
				</Toolbar>
			</Paper>
		);
	}
}

export default LatestArticles;