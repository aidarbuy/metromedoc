import React from 'react';
// import Helmet from 'react-helmet';
import Title from 'react-title-component';
import WebRTC from '../components/telemed/WebRTC';

export default React.createClass({
	render() {
		return (
			<section>
				{/*<Helmet title="MetromedUC TeleMed" />*/}
				<Title render={(previousTitle) => `Telemed - ${previousTitle}`} />

				<WebRTC/>
			</section>
		);
	}
});
