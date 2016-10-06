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

export default ({color, bgColor, marginLeft}) => (
	<FullWidthSection className="margin-top" style={{background:bgColor}}>

		<div className="col-xs-12 col-sm-6">
			<address style={{color:color}}>
				<strong>Metromed-UC</strong><br/>
				952 Edwards Ferry Rd NE<br/>
				Leesburg, VA 20176<br/>
				Phone: <a href="tel:(703) 687-4158">(703) 687-4158</a>
			</address>
		</div>

		<div className="col-xs-12 col-sm-6">
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
		</div>

    <div className="pull-xs-right margin-top">
      <address style={{color:color}}>
        <strong>&copy; 2016 Amygdala LLC</strong><br/>
      </address>
    </div>

	</FullWidthSection>
);