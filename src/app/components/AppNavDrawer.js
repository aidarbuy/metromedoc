import {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {spacing, typography, zIndex} from 'material-ui/styles';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AboutIcon from 'material-ui/svg-icons/action/info';
import ServicesIcon from 'material-ui/svg-icons/maps/local-hospital';
import DoctorsIcon from 'material-ui/svg-icons/social/people';
import ArticlesIcon from 'material-ui/svg-icons/av/library-books';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import VirtualIcon from 'material-ui/svg-icons/action/three-d-rotation';
import Divider from 'material-ui/Divider';

const SelectableList = makeSelectable(List);

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  handleTouchTapHeader = () => {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  };

  render() {
    const {location, docked, onRequestChangeNavDrawer, onChangeList, open, style} = this.props;
    const iconFillColor = this.context.muiTheme.palette.primary2Color;
    const aHrefColor = this.context.muiTheme.palette.alternateTextColor;
    // const dividerColor = this.context.muiTheme.palette.accent3Color;
    return (
      <Drawer
        style={style} docked={docked} open={open} width={200}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        <div style={{
          cursor: 'pointer',
          fontSize: 24,
          color: typography.textFullWhite,
          //lineHeight: `${spacing.desktopKeylineIncrement}px`,
          lineHeight: 0.9,
          fontWeight: typography.fontWeightLight,
          backgroundColor: this.context.muiTheme.palette.primary1Color,
          paddingLeft: spacing.desktopGutter,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
          <div onTouchTap={this.handleTouchTapHeader} style={{
            fontSize: '114%'
          }}>METROMED</div>
          <Divider style={{marginRight: 25, marginTop: 0, opacity: 0.3}}/>
          <div onTouchTap={this.handleTouchTapHeader} style={{
            fontSize: '70%',
            letterSpacing: 6.2,
            marginTop: -2,
          }}>urgent care</div>
          <div style={{
            marginTop: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <a href='tel:(703)-687-4158' style={{
              color: aHrefColor,
              letterSpacing: 0.4,
              fontSize: '89%',
              fontWeight: 400,
            }}>(703)-687-4158</a>
          </div>
          <div style={{marginTop: 5}}>
            <a href='mailto:info@metromeduc.com' style={{
              color: aHrefColor,
              fontSize: '60%',
              letterSpacing: 0.2,
            }}>info@metromeduc.com</a>
          </div>
        </div>
        <SelectableList value={"/" + location.pathname.split('/')[1]} onChange={onChangeList}>
          <ListItem primaryText="Home"         value="/"         innerDivStyle={{paddingLeft: 55}} leftIcon={<HomeIcon style={{fill: iconFillColor}}/>}/>
          <ListItem primaryText="About Us"     value="/about"    innerDivStyle={{paddingLeft: 55}} leftIcon={<AboutIcon style={{fill: iconFillColor}}/>}/>
          <ListItem primaryText="Services"     value="/services" innerDivStyle={{paddingLeft: 55}} leftIcon={<ServicesIcon style={{fill: iconFillColor}}/>}/>
          <ListItem primaryText="Doctors"      value="/doctors"  innerDivStyle={{paddingLeft: 55}} leftIcon={<DoctorsIcon style={{fill: iconFillColor}}/>}/>
          <ListItem primaryText="Articles"     value="/articles" innerDivStyle={{paddingLeft: 55}} leftIcon={<ArticlesIcon style={{fill: iconFillColor}}/>}/>
          <ListItem primaryText="Location"     value="/location" innerDivStyle={{paddingLeft: 55}} leftIcon={<LocationIcon style={{fill: iconFillColor}}/>}/>
          <ListItem primaryText="Virtual Tour" value="/virtual"  innerDivStyle={{paddingLeft: 55}} leftIcon={<VirtualIcon style={{fill: iconFillColor}}/>} href="/virtual"/>
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
