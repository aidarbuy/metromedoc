import {Component, PropTypes} from 'react';
// import HomeFeature from '../HomeFeature';
// import FullWidthSection from '../../FullWidthSection';
// import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
// import spacing from 'material-ui/styles/spacing';
// import typography from 'material-ui/styles/typography';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';
import Title from 'react-title-component';
import Advertising from './Advertising';
import BlueBar from './BlueBar';
import CallToAction from './CallToAction';
import CustomServices from './CustomServices';
// import LatestArticles from './LatestArticles';
import Testimonials from './Testimonials';
// require('../../../styles/bluebar.css');

class HomePage extends Component {
  static propTypes = {
    // width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    $("#layerslider").layerSlider({
      showCircleTimer: false,
      showBarTimer: false,
      // layersContainer: 600,
      // responsiveUnder: 400,
      skin: 'noskin',
      firstSlide: 1,
      // animateFirstSlide: false,
      sliderFadeInDuration: 250,
    });
  }

  render() {
    const style = {
      // paddingTop: spacing.desktopKeylineIncrement,
    };

    const {
      accent1Color, alternateTextColor, clockCycleColor, primary1Color, primary2Color
    } = this.context.muiTheme.palette;

    return (
      <div style={style}>
        <Title render={(previousTitle) => `About Us - ${previousTitle}`} />

        <div className="embed-responsive embed-responsive-16by9">
          <Advertising className="embed-responsive-item"/>
        </div>
        <BlueBar textColor={alternateTextColor} bgColor={primary2Color} paperBgColor={accent1Color}/>
        <CallToAction textColor={accent1Color} paperBgColor={primary2Color}/>
        <CustomServices hoverColor={accent1Color} iconColor={primary2Color} titleColor={primary2Color}/>
        <div className="container-fluid" style={{marginBottom:30}}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              {/*<LatestArticles accentColor={accent1Color} canvasColor={canvasColor}/>*/}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Testimonials secondaryTextColor={clockCycleColor}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(HomePage);
