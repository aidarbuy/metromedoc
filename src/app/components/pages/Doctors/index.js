import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import dataDoctors from "../../../data/doctors";
import DoctorCard from '../../cards/DoctorCard';

export default class Doctors extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object,
		store: PropTypes.object,
	};

	render() {
		const {primary1Color} = this.context.muiTheme.palette;

		return (
			<section>
				<Title render={(previousTitle) => `Doctors - ${previousTitle}`}/>

				<div className="container-fluid">
					<div className="row">
						{dataDoctors.map((doctor, i) => (
							<div key={doctor.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
								<DoctorCard
									color={primary1Color}
									dispatchAction={this.dispatchAction}
									doctor={doctor}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
};