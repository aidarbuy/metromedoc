import dataDoctors from "../../data/doctors";
import DoctorCard from '../cards/DoctorCard';
// import Helmet from 'react-helmet';
import Title from 'react-title-component';
import React from 'react';

class Doctors extends React.Component {
	constructor(props) {
		super(props);
		this.dispatchAction = this.dispatchAction.bind(this);
	}

	dispatchAction(route) {
		this.context.store.dispatch({type:"UPDATE_ROUTE", route});
	}

	render() {
		const { primary1Color } = this.context.muiTheme.palette;

		return (
			<section>
				{/*<Helmet title="Doctors - Metromed UC"/>*/}
				<Title render={(previousTitle) => `Doctors - ${previousTitle}`} />

				{/*<h3 style={{color:primary3Color}}>Doctors</h3>*/}

				<div className="flex-container">
					{dataDoctors.map((doctor, i) => (
						<div key={doctor.id} className="doctors-item">
							<DoctorCard
								color={primary1Color}
								dispatchAction={this.dispatchAction}
								doctor={doctor}
							/>
						</div>
					))}
				</div>
			</section>
		);
	}
}

Doctors.contextTypes = {
	muiTheme: React.PropTypes.object,
	store: React.PropTypes.object,
};

export default Doctors;