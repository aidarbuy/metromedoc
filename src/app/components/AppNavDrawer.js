import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {spacing, typography, zIndex} from 'material-ui/styles';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AboutIcon from 'material-ui/svg-icons/action/info';
import ServicesIcon from 'material-ui/svg-icons/maps/local-hospital';
import DoctorsIcon from 'material-ui/svg-icons/social/people';
import ArticlesIcon from 'material-ui/svg-icons/av/library-books';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import VirtualIcon from 'material-ui/svg-icons/action/three-d-rotation';

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

  getStyles = () => {
    return {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: this.context.muiTheme.palette.primary1Color,
        paddingLeft: spacing.desktopGutter,
      },
    };
  };

  render() {
    const {location, docked, onRequestChangeNavDrawer, onChangeList, open, style} = this.props;
    const iconFillColor = this.context.muiTheme.palette.primary2Color;

    return (
      <Drawer style={style} docked={docked} open={open} width={200}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        <div style={this.getStyles().logo} onTouchTap={this.handleTouchTapHeader}>Metromed-UC</div>
        <Card style={{maxWidth:200, margin:0, padding:0}}>
          <CardMedia overlayContentStyle={{bottom: -1}} overlay={
            <CardTitle
              title={<a href='tel:(703)-687-4158' style={{
                color: this.context.muiTheme.palette.alternateTextColor,
                textDecoration:'none',
                fontSize:'90%'
              }}>(703)-687-4158</a>}
              subtitle={<a href='mailto:info@metromeduc.com' style={{
                color: this.context.muiTheme.palette.alternateTextColor,
                textDecoration:'none'
              }}>info@metromeduc.com</a>}
            />
          }>
            <img src='https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Fteam%2Fthree-medics-thumb.jpg?alt=media&token=3fa958ba-ffe1-4ea4-bbb6-6d732ce59c6b' />
          </CardMedia>
        </Card>
        <SelectableList value={"/" + location.pathname.split('/')[1]} onChange={onChangeList}>
          <ListItem primaryText="Home"         value="/"         innerDivStyle={{paddingLeft:55}} leftIcon={<HomeIcon style={{fill:iconFillColor}}/>}/>
          <ListItem primaryText="About Us"     value="/about"    innerDivStyle={{paddingLeft:55}} leftIcon={<AboutIcon style={{fill:iconFillColor}}/>}/>
          <ListItem primaryText="Services"     value="/services" innerDivStyle={{paddingLeft:55}} leftIcon={<ServicesIcon style={{fill:iconFillColor}}/>}/>
          <ListItem primaryText="Doctors"      value="/doctors"  innerDivStyle={{paddingLeft:55}} leftIcon={<DoctorsIcon style={{fill:iconFillColor}}/>}/>
          <ListItem primaryText="Articles"     value="/articles" innerDivStyle={{paddingLeft:55}} leftIcon={<ArticlesIcon style={{fill:iconFillColor}}/>}/>
          <ListItem primaryText="Location"     value="/location" innerDivStyle={{paddingLeft:55}} leftIcon={<LocationIcon style={{fill:iconFillColor}}/>}/>
          <ListItem primaryText="Virtual Tour" value="/virtual"  innerDivStyle={{paddingLeft:55}} leftIcon={<VirtualIcon style={{fill:iconFillColor}}/>}/>
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
