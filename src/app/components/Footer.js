import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import dataSocial from '../data/social';
import IconButton from 'material-ui/IconButton';
import IconFacebook from './icons/IconFacebook';
import IconGoogle from './icons/IconGooglePlus';
import IconInstagram from './icons/IconInstagram';

const Icon = ({iconName, styles}) => {
	switch (iconName) {
		case 'IconFacebook': 	return <IconFacebook styles={styles}/>;
		case 'IconInstagram': return <IconInstagram styles={styles}/>;
		case 'IconGoogle': 		return <IconGoogle styles={styles}/>;
		default: return null;
	}
};

export default ({color, bgColor}) => (
	<Toolbar style={{marginTop:0, background:bgColor}}>
		<ToolbarGroup firstChild={true}>
			{dataSocial.slice(0, 3).map((icon, index) => (
				<a key={icon.name} href={icon.href}>
					<IconButton touch tooltip={icon.desc} tooltipPosition="top-right" style={{marginTop:4}} tooltipStyles={{textTransform:'none'}}>
						<Icon iconName={icon.icon} styles={{color:'red', hover:'blue'}}/>
					</IconButton>
				</a>
			))}
		</ToolbarGroup>

		<ToolbarGroup lastChild={true}>
			<ToolbarTitle style={{fontSize:16, color:color}} text="2016 Amygdala LLC"/>
		</ToolbarGroup>
	</Toolbar>
);