import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import Greetings from './Greetings';
import Metromed from './Metromed';

export default class About extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object,
	};

	render() {
		const {
			accent1Color, accent2Color, borderColor, primary2Color, textColor
		} = this.context.muiTheme.palette;

		return (
			<section>
				<Title render={(previousTitle) => `About Us - ${previousTitle}`} />

				<div className="container-fluid">
					<div className="row">

						<div className="col-lg-6 col-xs-12">
							<Greetings
								accentColor 		 = { accent1Color }
								imgSubtitleColor = { borderColor }
								primaryColor 		 = { primary2Color }
								textColor 			 = { textColor }
							/>
						</div>

						<div className="col-lg-6 col-xs-12">
							<Metromed
								accentColor 		 = { accent2Color }
								imgSubtitleColor = { borderColor }
								primaryColor 		 = { primary2Color }
								textColor 			 = { textColor }
							/>
						</div>

					</div>
				</div>
			</section>
		);
	}
};