import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import dataDoctors from "../../../data/doctors";
import DoctorCard from '../../cards/DoctorCard';

class Doctors extends Component {
	render() {
		const {primary1Color} = this.context.muiTheme.palette;

		return (
			<section>
				<Title render={(previousTitle) => `Doctors - ${previousTitle}`}/>

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
	muiTheme: PropTypes.object,
	store: PropTypes.object,
};

export default Doctors;