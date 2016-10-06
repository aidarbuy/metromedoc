import {Component, PropTypes} from 'react';
import {database} from '../../../data/firebase';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Title from 'react-title-component';
import Link from 'react-router/lib/Link';

export default class Article extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object,
		store: PropTypes.object,
	};

	constructor(props) {
		super(props);
		this.state = {
			image: <h5>Loading image</h5>,
			title: '',
			date:  '',
			href:  '',
			text:  'Loading article text...',
		};
	}

	componentWillMount() {
		const {id} = this.props.params;
		database.ref("articles").orderByChild("img/src").equalTo(id).once("child_added").then(snap => {
			const article = snap.val();
			const textMap = article.text.map((p, i) => (
				<p key={i} dangerouslySetInnerHTML={{__html:p}}/>
			));
			this.setState({
				title: article.title,
				date:  article.date,
				href:  article.img.href,
				text:  textMap,
			});
		});
	}

	render() {
		const {alternateTextColor} = this.context.muiTheme.palette;
		const avatar = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Fdoctors%2Fmatthew-100x100.jpg?alt=media&token=ca4e179f-1af4-4f30-88da-5b038d13c603';
		return (
			<section className="container-fluid">
				<Title render={(previousTitle) => `${this.state.title}`}/>

				<FlatButton secondary label="All Articles" labelPosition="after" className="m-t-1 m-b-1"
					containerElement={<Link to="/articles"/>} icon={<ArrowBack/>}
				/>

				<article>
					<Card style={{margin: 0}}>
						<CardHeader title="Matthew Beckwith" subtitle="Doctor of Medicine" avatar={avatar}/>

						<CardMedia overlay={
							<CardTitle title={this.state.title} titleStyle={{color:alternateTextColor}}
								subtitle={this.state.date} subtitleStyle={{color:alternateTextColor}}
							/>
						}>
							{this.state.href == '' ? <span>"Loading article image"</span> : <img src={this.state.href}/>}
						</CardMedia>

						<CardText style={{fontSize:'18 !important', padding:'5%'}}>{this.state.text}</CardText>
					</Card>
				</article>
			</section>
		)
	}
};