import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';

export default class Virtual extends Component {
  constructor(props) {
    super(props);
    this.state = {y:0, height:0};
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  };

  componentDidMount() {
    this.iFrameUpdateHeight();
    window.addEventListener('resize', () => this.iFrameUpdateHeight());
  }

  iFrameUpdateHeight() {
    const windowInnerHeight = window.innerHeight;
    var iframes = window.parent.document.getElementsByTagName('iframe');
    var y = iframes[0].getBoundingClientRect().top;
    const toolbarHeight = this.context.muiTheme.toolbar.height;
    var height = windowInnerHeight - y - toolbarHeight + 11;
    this.setState({windowInnerHeight, y, height});
  }

  render() {
    const {primary2Color} = this.context.muiTheme.palette;
    return (
      <section>
        <Title render={(previousTitle) => `Virtual Tour - ${previousTitle}`} />

        {/*<p style={{color:primary2Color, textAlign:'center'}}>Walk through our clinic in 360° virtual tour:</p>*/}

        <iframe
          ref="iframe"
          src='https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435317827152!6m8!1m7!1sDV3R4lZfUPwAAAQqg2kDFw!2m2!1d39.116755!2d-77.539826!3f328!4f0!5f0.7820865974627469'
          style={{width:'100%', height:this.state.height}}
          frameBorder="0"
          allowFullScreen
        />
      </section>
    );
  }
};