import dataGallery from '../../data/gallery';
// import Helmet from 'react-helmet';
import Title from 'react-title-component';
import React, { Component, PropTypes } from 'react';

class Gallery extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		jQuery(document).ready(function () {
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
		});
	}

	render() {
		return (
			<section>
				{/*<Helmet title="Photo gallery"/>*/}
				<Title render={(previousTitle) => `Photo gallery - ${previousTitle}`} />

				{/*<h3 style={{color:primary3Color}}>Photo Gallery</h3>*/}

				<div id="nanoGallery">
					{dataGallery.map((photo, index) => (
						<a key={index} href={photo.image} data-ngthumb={photo.thumb} data-ngdesc={photo.desc}>
							{photo.title}
						</a>
					))}
				</div>
			</section>
		);
	}
}

Gallery.contextTypes = { muiTheme: PropTypes.object };

export default Gallery;