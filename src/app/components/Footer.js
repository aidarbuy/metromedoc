import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import dataSocial from '../data/social';
import IconButton from 'material-ui/IconButton';
import IconFacebook from './icons/IconFacebook';
import IconGoogle from './icons/IconGooglePlus';
import IconInstagram from './icons/IconInstagram';
import FullWidthSection from './FullWidthSection';

const Icon = ({iconName, styles}) => {
	switch (iconName) {
		case 'IconFacebook': 	return <IconFacebook styles={styles}/>;
		case 'IconInstagram': return <IconInstagram styles={styles}/>;
		case 'IconGoogle': 		return <IconGoogle styles={styles}/>;
		default: return null;
	}
};

export default ({color, bgColor}) => (
	<FullWidthSection style={{marginTop:0, background:bgColor}} className="text-center">
		{/*<ToolbarGroup firstChild={true}>
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
		</ToolbarGroup>*/}

		<address style={{color:color}}>
			<strong>Metromed-UC</strong><br/>
			952 Edwards Ferry Rd NE<br/>
			Leesburg, VA 20176<br/>
			Phone: <a href="tel:(703) 687-4158">(703) 687-4158</a>
		</address>

		{dataSocial.slice(0, 3).map((icon, index) => (
			<a key={icon.name} href={icon.href}>
				<IconButton touch tooltip={icon.desc} tooltipPosition="top-right" style={{marginTop:4}} tooltipStyles={{textTransform:'none'}}>
					<Icon iconName={icon.icon} styles={{color:'red', hover:'blue'}}/>
				</IconButton>
			</a>
		))}

		<address style={{color:color}}>
			<strong>Metromed Urgent Care</strong><br/>
			<a href="mailto:info@metromeduc.com">info@metromeduc.com</a>
		</address>

		<address style={{color:color, marginTop:20, paddingTop:20}} className="text-center">
			<strong>&copy; 2016 Amygdala LLC</strong><br/>
		</address>

	</FullWidthSection>
);