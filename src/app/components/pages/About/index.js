import React, { Component } from 'react';
import Title from 'react-title-component';
import Greetings from './Greetings';
import Metromed from './Metromed';

class About extends Component {
	render() {
		const {
			accent1Color, accent2Color, borderColor, primary2Color, textColor
		} = this.context.muiTheme.palette;

		return (
			<section>
				<Title render={(previousTitle) => `About Us - ${previousTitle}`} />

				<div className="flex-container">
					<div className="flex-item-half">
						<Greetings
							accentColor 		 = { accent1Color }
							imgSubtitleColor = { borderColor }
							primaryColor 		 = { primary2Color }
							textColor 			 = { textColor }
						/>
					</div>

					<div className="flex-item-half">
						<Metromed
							accentColor 		 = { accent2Color }
							imgSubtitleColor = { borderColor }
							primaryColor 		 = { primary2Color }
							textColor 			 = { textColor }
						/>
					</div>
				</div>
			</section>
		);
	}
}

About.contextTypes = {muiTheme:React.PropTypes.object};

export default About;