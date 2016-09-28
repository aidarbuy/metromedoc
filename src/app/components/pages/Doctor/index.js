import {Component, PropTypes} from 'react';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import doctors from '../../../data/doctors';
import Title from 'react-title-component';
import Link from 'react-router/lib/Link';

class Doctor extends Component {
	constructor(props) {
		super(props);
		this.handleTouchTap = this.handleTouchTap.bind(this);
	}

	getDoctor(id) {
		for (var i = doctors.length - 1; i >= 0; i--) {
			if (doctors[i].id == id) {
				return doctors[i];
			}
		}
	}

	handleTouchTap() {
		const route = "/doctors", index = 3;
		// this.context.router.push(route);
		this.context.store.dispatch({type:"UPDATE_ROUTE", route});
		this.context.store.dispatch({type:"UPDATE_INDEX", index});
	}

	render() {
		const {primary2Color, textColor} = this.context.muiTheme.palette;
		const {id} = this.props.params;
		const doctor = this.getDoctor(id);

		return (
			<article>
				<Title render={(previousTitle) => `Dr. ${doctor.firstname} ${doctor.lastname}`}/>

				<div style={{textAlign: 'left'}}>
					<FlatButton
						containerElement = { <Link to="/doctors" /> }
						icon 						 = { <ArrowBack/> }
						label 					 = { "All Doctors" }
						labelPosition 	 = { "after" }
						secondary 			 = { true }
					/>
				</div>

				<h3 style={{color: primary2Color, textTransform: 'capitalize'}}>
					Dr. {doctor.firstname} {doctor.lastname}
				</h3>

				<img width="100%" src={"/images/doctors/" + doctor.img.big}/>

				<div style={{margin: 50, color: textColor}}>
					{doctor.description.map((section, i) => (
						<p key={i} dangerouslySetInnerHTML={{__html: section}}/>
					))}
				</div>
			</article>
		)
	}
}

Doctor.contextTypes = {
	store:  PropTypes.object,
	router: PropTypes.object,
	muiTheme: PropTypes.object,
};

export default Doctor;