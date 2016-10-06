import {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import GMaps from './GoogleMaps';
import Title from 'react-title-component';
import RaisedButton from 'material-ui/RaisedButton';
import PhonelinkRing from 'material-ui/svg-icons/communication/phonelink-ring';
import MapsPlace from 'material-ui/svg-icons/maps/place';

export default class Location extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object,
	};

	render() {
		const {primary2Color, accent1Color} = this.context.muiTheme.palette;
		const address = "952 Edwards Ferry Rd NE";
		const city = "Leesburg, VA 20176";
		const location = "http://maps.google.com/?q=952 Edwards Ferry Road NE, Leesburg, Virginia, 20176";
		const leesburg = "http://maps.google.com/?q=Leesburg, Virginia, 20176";
		const phone = "(703)-687-4158";
		const email = "info@metromeduc.com";
		// const loungeSrc = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Finterior%2Flounge-1200x600.jpg?alt=media&token=7d9226dc-645f-47bf-801d-2a2ecf875294';
		const text = "Clean and pleasant place";
		const text2 = "We are right next to Wal-Mart";
		const title = "Contacts and Location";

		return (
			<section>
				<Title render={(previousTitle) => `Location - ${previousTitle}`}/>

				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-lg-6 margin-top">
							<Card>
								<CardHeader
									title={<a href={"tel:" + phone} style={{color:accent1Color, fontSize:18}}>{phone}</a>}
									subtitle = {<a href={"mailto:" + email} style={{color:primary2Color, fontSize:16}}>{email}</a>}
									avatar={<PhonelinkRing style={{fill:primary2Color, marginTop:12, marginLeft:10}}/>}
								/>
								<CardMedia overlay={<CardTitle title={text} style={{paddingTop:5, paddingBottom:10}}/>}>
									<img src="images/clinic/lounge-820x465.jpg"/>
								</CardMedia>
								<CardActions style={{textAlign:'center', paddingTop:20, paddingBottom:20}}>
									<RaisedButton href={"tel:" + phone} label="Call Us" secondary={true}/>
									<RaisedButton href={"mailto:" + email} label="Email Us" primary={true}/>
								</CardActions>
							</Card>
						</div>

						<div className="col-xs-12 col-lg-6 margin-top">
							<Card>
								<CardHeader
									title={<a href={location} style={{color:accent1Color, fontSize:18}}>{address}</a>}
									subtitle={<a href={leesburg} style={{color:primary2Color, fontSize:16}}>{city}</a>}
									avatar = {<MapsPlace color={primary2Color} style={{marginTop:12, marginLeft:10, width:30, height:30}}/>}
								/>
								<CardMedia><GMaps height={386}/></CardMedia>
								<CardMedia overlay={<CardTitle title={text2} style={{paddingTop:5, paddingBottom:10}}/>}/>
								<CardActions style={{textAlign:'center', paddingTop:20, paddingBottom:20}}>
									<RaisedButton href={location} label="Open in Google Maps" primary={true}/>
								</CardActions>
							</Card>
						</div>
					</div>
				</div>
			</section>
		);
	}
};