import dataSocial from '../data/social';
import IconButton from 'material-ui/IconButton';
import IconFacebook from './icons/IconFacebook';
import IconGoogle from './icons/IconGooglePlus';
import IconInstagram from './icons/IconInstagram';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import React from 'react';

const Icon = React.createClass({
	render() {
		switch (this.props.iconName) {
			case 'IconFacebook': 	return <IconFacebook styles={this.props.styles}/>;
			case 'IconInstagram': return <IconInstagram styles={this.props.styles}/>;
			case 'IconGoogle': 		return <IconGoogle styles={this.props.styles}/>;
			default: return null;
		}
	}
});

export default ({color, bgColor}) => (
	<Toolbar style={{marginTop:30, background:bgColor}}>
		<ToolbarGroup firstChild={false}>
			{dataSocial.slice(0, 3).map((icon, index) => (
				<a key={icon.name} href={icon.href}>
					<IconButton touch tooltip={icon.desc} tooltipPosition="top-right" style={{marginTop:4}} tooltipStyles={{textTransform:'none'}}>
						<Icon iconName={icon.icon} styles={{color:'red', hover:'blue'}}/>
					</IconButton>
				</a>
			))}
		</ToolbarGroup>

		<ToolbarGroup lastChild={false}>
			<ToolbarTitle style={{fontSize:16, color:color}} text="&copy; 2016 Amygdala LLC"/>
		</ToolbarGroup>
	</Toolbar>
);