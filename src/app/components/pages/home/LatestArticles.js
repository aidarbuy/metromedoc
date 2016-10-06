import {observer} from 'mobx-react';
import {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import latestArticlesStore from '../../../data/latestArticlesStore';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import ArticleCard from '../../cards/ArticleCard';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';

@observer class LatestArticles extends Component {
	render() {
		const {canvasColor} = this.props;

		return (
			<Paper className="m-t-3">
				<Toolbar>
					<ToolbarGroup style={{marginLeft:'auto', marginRight:'auto'}}>
						<ToolbarTitle text="Latest Articles"/>
					</ToolbarGroup>
				</Toolbar>

				<div className="container-fluid" style={{marginTop:0}}>
					<div className="row">
						{
							latestArticlesStore.articles.length === 0 ?
              <LinearProgress className="m-t-2 m-b-1"/> :
							latestArticlesStore.articles.map((article, i) => (
								<div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 m-t-1" key={i}>
									<ArticleCard
										title    = { article.title }
										subtitle = { article.date }
										image 	 = { article.img.src }
										href 	 	 = { article.img.href }
										teaser   = { article.teaser }
									/>
								</div>
							))
						}
					</div>
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