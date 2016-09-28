import {Component, PropTypes} from 'react';
// import HomeFeature from '../HomeFeature';
// import FullWidthSection from '../../FullWidthSection';
// import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
// import spacing from 'material-ui/styles/spacing';
// import typography from 'material-ui/styles/typography';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';
import Advertising from './Advertising';
import BlueBar from './BlueBar';
import CallToAction from './CallToAction';
import CustomServices from './CustomServices';
import LatestArticles from './LatestArticles';
import Testimonials from './Testimonials';

class HomePage extends Component {

  static propTypes = {
    // width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    // router: PropTypes.object.isRequired,
    muiTheme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    jQuery("#layerslider").layerSlider({
      showCircleTimer: false,
      showBarTimer: false,
      skin: 'noskin'
    });
  }

  render() {
    const style = {
      // paddingTop: spacing.desktopKeylineIncrement,
    };

    const {
      accent1Color, alternateTextColor, canvasColor, clockCycleColor, primary1Color, primary2Color
    } = this.context.muiTheme.palette;

    return (
      <div style={style}>
        <Advertising/>
        <BlueBar textColor={alternateTextColor} bgColor={primary1Color}/>
        <CallToAction textColor={alternateTextColor} paperBgColor={primary2Color}/>
        <CustomServices hoverColor={accent1Color} iconColor={primary2Color} titleColor={primary2Color}/>
        <div className='flex-container'>
          <div className='flex-home-half'>
            <LatestArticles accentColor={accent1Color} canvasColor={canvasColor}/>
          </div>
          <div className='flex-home-half'>
            <Testimonials secondaryTextColor={clockCycleColor}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(HomePage);
