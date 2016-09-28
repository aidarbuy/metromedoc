import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import dataGallery from '../../../data/gallery';

export default class Gallery extends Component {
	static contextTypes = {
		muiTheme: PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		jQuery("#nanoGallery").nanoGallery({
			theme: 'light',
			colorScheme: 'none',
			colorSchemeViewer: 'dark',
			locationHash: false,
			thumbnailWidth: 'auto', thumbnailHeight: 200,
			thumbnailHoverEffect: [
				{ name:'imageScale150', duration:400, easing:'swing' },
				{ name:'borderLighter' },
				{ name:'labelAppear75' }
			],
			thumbnailGutterWidth : 0,
			thumbnailGutterHeight : 0,
			thumbnailLabel: {
				display: true,
				position: 'overImageOnMiddle',
				align:'center'
			}
		});
	}

	render() {
		return (
			<section>
				<Title render={(previousTitle) => `Photo gallery - ${previousTitle}`} />

				<div id="nanoGallery">
					{dataGallery.map((photo, i) => (
						<a key={i} href={photo.image} data-ngthumb={photo.thumb} data-ngdesc={photo.desc}>
							{photo.title}
						</a>
					))}
				</div>
			</section>
		);
	}
};