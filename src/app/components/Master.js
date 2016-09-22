import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkWhite, lightWhite, grey900, blue500} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import AppTabs from './AppTabs';
import FullWidthSection from './FullWidthSection';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
require('./typography.css');

lightBaseTheme.palette.primary1Color = blue500;

class Master extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  state = {
    navDrawerOpen: false,
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(lightBaseTheme),
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
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
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  };

  handleChangeRequestNavDrawer = (open) => {
    this.setState({
      navDrawerOpen: open,
    });
  };

  handleChangeList = (event, value) => {
    this.context.router.push(value);
    this.setState({
      navDrawerOpen: false,
    });
  };

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme: muiTheme,
    });
  };

  handleTabActive = (tab) => {
    this.context.router.push(tab.props.value);
  };

  render() {
    const {
      location,
      children,
    } = this.props;

    let {
      navDrawerOpen,
    } = this.state;

    const {
      prepareStyles,
    } = this.state.muiTheme;

    const router = this.context.router;
    const styles = this.getStyles();
    const title =
      router.isActive('/get-started') ? 'Get Started' :
      router.isActive('/customization') ? 'Customization' :
      router.isActive('/components') ? 'Components' :
      router.isActive('/discover-more') ? 'Discover More' : '';

    let docked = false;
    let showMenuIconButton = true;

    if (this.props.width === LARGE && title !== '') {
      docked = true;
      navDrawerOpen = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    return (
      <div>
        <Title render="Metromed-UC" />
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={title}
          zDepth={0}
          iconElementRight={
            <IconMenu iconButtonElement={<IconButton><ExpandMore/></IconButton>} targetOrigin={{horizontal:'right', vertical:'top'}} anchorOrigin={{horizontal:'right', vertical:'top'}}>
              <MenuItem primaryText="Reload this page" onTouchTap={()=> {window.location.reload()}}/>
              {/*<MenuItem primaryText="Photo gallery" containerElement={<Link to='/gallery'/>} onClick={handleAppBarClick('/gallery')}/>*/}
              {/*<MenuItem primaryText={isThemeDark ? "Light interface" : "Dark interface"} onTouchTap={() => setTheme(!isThemeDark)}/>*/}
              {/*<MenuItem primaryText={isAppbarFixed ? "Unstick app bar" : "Stick app bar"} onTouchTap={toggleAppbarFixed}/>*/}
            </IconMenu>
          }
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />
        <AppTabs bgColor={this.state.muiTheme.palette.primary1Color} handleActive={this.handleTabActive} />
        {title !== '' ?
          <div style={prepareStyles(styles.root)}>
            <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children, {
                onChangeMuiTheme: this.handleChangeMuiTheme,
              })}
            </div>
          </div> :
          children
        }
        <AppNavDrawer
          style={styles.navDrawer}
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />
        <FullWidthSection style={styles.footer}>
          <p style={prepareStyles(styles.p)}>
            {'Hand crafted with love by the engineers at '}
            <a style={styles.a} href="http://www.call-em-all.com/Careers">
              Call-Em-All
            </a>
            {' and our awesome '}
            <a
              style={prepareStyles(styles.a)}
              href="https://github.com/callemall/material-ui/graphs/contributors"
            >
              contributors
            </a>.
          </p>
          <IconButton
            iconStyle={styles.iconButton}
            iconClassName="muidocs-icon-custom-github"
            href="https://github.com/callemall/material-ui"
          />
          <p style={prepareStyles(styles.browserstack)}>
            {'Thank you to '}
            <a href="https://www.browserstack.com" style={prepareStyles(styles.browserstackLogo)} target="_blank">
              <img src="https://www.browserstack.com/images/layout/logo.png" height="25" width="auto" />
            </a>
            {' for providing real browser testing infrastructure.'}
          </p>
        </FullWidthSection>
      </div>
    );
  }
}

export default withWidth()(Master);
