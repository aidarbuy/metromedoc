import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppNavDrawer from './AppNavDrawer';
import AppTabs from './AppTabs';
import Footer from './Footer';
import FullWidthSection from './FullWidthSection';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Link from 'react-router/lib/Link';
// import AppBottomNav from './AppBottomNav';
require('../styles/layout.css');
require('../styles/typography.css');

import {

  red500,     pink500,      purple500,      deepPurple500,
  red700,     pink700,      purple700,      deepPurple700,
  red900,     pink900,      purple900,      deepPurple900,

  indigo500,  blue500,      lightBlue500,   cyan500,
  indigo700,  blue700,      lightBlue700,   cyan700,
  indigo900,  blue900,      lightBlue900,   cyan900,

  teal500,    green500,     lightGreen500,  lime500,
  teal700,    green700,     lightGreen700,  lime700,
  teal900,    green900,     lightGreen900,  lime900,

  yellow500,  amber500,     orange500,      deepOrange500,
  yellow700,  amber700,     orange700,      deepOrange700,
  yellow900,  amber900,     orange900,      deepOrange900,

                            grey200,
  brown500,   blueGrey500,  grey500,
  brown700,   blueGrey700,  grey700,
  brown900,   blueGrey900,  grey900,

  black,       //   0,   0,   0, 1.00
  fullBlack,   //   0,   0,   0, 1.00
  darkBlack,   //   0,   0,   0, 0.87
  lightBlack,  //   0,   0,   0, 0.54
  minBlack,    //   0,   0,   0, 0.26
  faintBlack,  //   0,   0,   0, 0.12
  transparent, //   0,   0,   0, 0.00

  white,       // 255, 255, 255, 1.00
  fullWhite,   // 255, 255, 255, 1.00
  darkWhite,   // 255, 255, 255, 0.87
  lightWhite,  // 255, 255, 255, 0.54

} from 'material-ui/styles/colors';

lightBaseTheme.palette.primary1Color = blue500;
lightBaseTheme.palette.primary2Color = blue700;
// lightBaseTheme.palette.primary3Color = grey900;

// lightBaseTheme.palette.accent1Color = pink500;
// lightBaseTheme.palette.accent2Color = purple700;
// lightBaseTheme.palette.accent3Color = purple900;

// lightBaseTheme.palette.textColor = orange500;
// lightBaseTheme.palette.secondaryTextColor =
// lightBaseTheme.palette.alternateTextColor =

// lightBaseTheme.palette.disabledColor =
// lightBaseTheme.palette.pickerHeaderColor =
// lightBaseTheme.palette.clockCircleColor =

// lightBaseTheme.palette.borderColor =
// lightBaseTheme.palette.shadowColor =
// lightBaseTheme.palette.canvasColor =

class Master extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {router: PropTypes.object.isRequired};
  static childContextTypes = {muiTheme: PropTypes.object};
  getChildContext() {return {muiTheme: this.state.muiTheme}}
  state = {navDrawerOpen: false, themeMode: 'Light mode'};

  componentWillMount() {
    let themeMode = localStorage ? localStorage.getItem('themeMode') : 'Light mode';
    let muiTheme = themeMode === 'Dark mode' ? getMuiTheme(darkBaseTheme) : getMuiTheme(lightBaseTheme);
    muiTheme.drawer.width = 200;
    this.setState({themeMode});
    this.handleChangeMuiTheme(muiTheme);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      // appBarTitle: {
      //   color: 'red',
      //   textAlign: 'center',
      //   marginLeft: 'auto',
      //   marginRight: 'auto',
      // },
      root: {
        // paddingTop: spacing.desktopKeylineIncrement,
        // paddingTop: 0,
        // minHeight: 400,
      },
      content: {
        // margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        // margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: grey900,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: lightWhite,
        maxWidth: 356,
      },
      browserstack: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '25px 15px 0',
        padding: 0,
        color: lightWhite,
        lineHeight: '25px',
        fontSize: 12,
      },
      browserstackLogo: {
        margin: '0 3px',
      },
      iconButton: {
        color: darkWhite,
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      // styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  handleTouchTapLeftIconButton = () => this.setState({navDrawerOpen: !this.state.navDrawerOpen});
  handleChangeRequestNavDrawer = open => this.setState({navDrawerOpen: open});
  handleTabActive = tab => this.context.router.push(tab.props.value);

  handleChangeList = (event, value) => {
    this.context.router.push(value);
    this.setState({navDrawerOpen: false});
  };

  handleChangeMuiTheme = muiTheme => {
    this.setState({muiTheme});
    document.body.style.backgroundColor = muiTheme.palette.canvasColor;
  };

  toggleMuiTheme = (e) => {
    const value = e.target.innerHTML;
    let newMuiTheme = value === 'Dark mode' ? getMuiTheme(darkBaseTheme): getMuiTheme();
    newMuiTheme.name = value;
    this.setState({themeMode: value});
    if (localStorage) localStorage.setItem('themeMode', value);
    this.handleChangeMuiTheme(newMuiTheme);
  };

  render() {
    const {location, children} = this.props;
    let {navDrawerOpen} = this.state;
    const {prepareStyles} = this.state.muiTheme;
    const router = this.context.router;
    const styles = this.getStyles();
    let docked = false;
    let showMenuIconButton = true;

    const title =
      router.isActive('/') ? "Metromed-UC" :
      router.isActive('/about') ? 'About Us' :
      router.isActive('/services') ? 'Services' :
      window.location.pathname.match(/doctors/g) == "doctors" ? "Doctors" :
      window.location.pathname.match(/articles/g) == "articles" ? "Articles" :
      router.isActive('/location') ? 'Location' :
      router.isActive('/virtual') ? 'Virtual Tour' :
      router.isActive('/gallery') ? 'Photo gallery' :
      router.isActive('/testlab') ? 'Test Lab' : 'Metromed-UC';

    // if (this.props.width === LARGE) {
    //   docked = true;
    //   navDrawerOpen = true;
    //   showMenuIconButton = false;
    //
    //   styles.navDrawer = {
    //     zIndex: styles.appBar.zIndex - 1,
    //   };
    //   styles.root.marginLeft = 200;
    //   // styles.root.paddingTop = this.state.muiTheme.appBar.height;
    //   styles.appBar.marginLeft = 200;
    //   styles.footer.marginLeft = 200;
    // }

    return (
      <div>
        <Title render="Metromed-UC"/>

        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={title}
          zDepth={0}
          iconElementRight={
            <IconMenu iconButtonElement={<IconButton><MoreVert/></IconButton>} targetOrigin={{horizontal:'right', vertical:'top'}} anchorOrigin={{horizontal:'right', vertical:'top'}}>
              <MenuItem primaryText="Reload this page" onTouchTap={()=> {window.location.reload()}}/>
              <MenuItem primaryText="Photo gallery" containerElement={<Link to='/gallery'/>}/>
              <MenuItem primaryText="Virtual tour" containerElement={<Link to='/virtual'/>}/>
              <MenuItem primaryText={this.state.themeMode === "Light mode" ? "Dark mode" : "Light mode"} onTouchTap={this.toggleMuiTheme}/>
              {/*<MenuItem primaryText={isAppbarFixed ? "Unstick app bar" : "Stick app bar"} onTouchTap={toggleAppbarFixed}/>*/}
              {/*<MenuItem primaryText="Test lab" containerElement={<Link to='/testlab'/>}/>*/}
            </IconMenu>
          }
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />

        <AppNavDrawer
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />

        <AppTabs
          bgColor={this.state.muiTheme.palette.primary1Color}
          handleActive={this.handleTabActive}
        />

        <div style={prepareStyles(styles.root)}>
          <div style={prepareStyles(styles.content)}>
            {window.location.pathname != "/testlab" ? null :
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb-item">Home</Link>
              <span className="breadcrumb-item active">{title}</span>
            </nav>}
            {React.cloneElement(children, {
              onChangeMuiTheme: this.handleChangeMuiTheme,
            })}
          </div>
        </div>

        <Footer
          color={darkWhite}
          bgColor={styles.footer.backgroundColor}
        />
      </div>
    );
  }
}

export default withWidth()(Master);