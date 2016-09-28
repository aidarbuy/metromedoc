import Title from 'react-title-component';
import WebRTC from './WebRTC';

export default React.createClass({
	render() {
		return (
			<section>
				<Title render={(previousTitle) => `Telemed - ${previousTitle}`}/>

				<WebRTC/>
			</section>
		);
	}
});