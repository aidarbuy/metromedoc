import {Component, PropTypes} from 'react';
import doctors from '../../../data/doctors';
import Title from 'react-title-component';
import FlatButton from 'material-ui/FlatButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Link from 'react-router/lib/Link';

export default class Doctor extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object,
	};

	getDoctor(id) {
		for (var i = doctors.length - 1; i >= 0; i--) {
			if (doctors[i].id == id) {
				return doctors[i];
			}
		}
	}

	render() {
		const {primary2Color, textColor} = this.context.muiTheme.palette;
		const {id} = this.props.params;
		const doctor = this.getDoctor(id);

		return (
			<article>
				<Title render={previousTitle => `Dr. ${doctor.firstname} ${doctor.lastname}`}/>

				<FlatButton secondary label="All Doctors" labelPosition="after"
					icon={<ArrowBack/>} containerElement={<Link to="/doctors"/>}
					className="m-t-1 m-b-1"
				/>

				<h3 style={{color:primary2Color, textTransform:'capitalize'}}>
					Dr. {doctor.firstname} {doctor.lastname}
				</h3>

				<img width="100%" src={"/images/doctors/" + doctor.img.big}/>

				<div style={{margin:50, color:textColor}}>
					{doctor.description.map((section, i) => (
						<p key={i} dangerouslySetInnerHTML={{__html:section}}/>
					))}
				</div>
			</article>
		)
	}
};