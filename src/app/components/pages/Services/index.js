import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import services from '../../../data/services';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class Services extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object,
	};

	constructor(props) {
		super(props);
	}

	render() {
    const {primary2Color, textColor} = this.context.muiTheme.palette;
		return (
			<section>
				<Title render={(previousTitle) => `Services - ${previousTitle}`}/>

				<div className="container-fluid">
					<div className="row">
						{services.map((service, i) => (
							<div key={i} className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<Card style={{textAlign: 'center'}}>
									<CardTitle style={{fontSize: 34, color: primary2Color}}>
										<span>{service.title}</span>
									</CardTitle>

									<CardMedia style={{margin: 0, padding: 0, fontSize: 77, color: primary2Color}}>
										<span>${service.price}</span>
									</CardMedia>

									<CardText>
										<List>
											{service.list.map((li, i, arr) => (
												<div key={i}>
													<ListItem disabled>
														<span style={{fontSize: 18, color: textColor}}>{li}</span>
													</ListItem>

													{i < service.list.length - 1 ? <Divider/> : null}
												</div>
											))}
										</List>
									</CardText>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
};