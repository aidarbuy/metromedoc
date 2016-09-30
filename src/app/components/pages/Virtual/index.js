import {Component, PropTypes} from 'react';
import Title from 'react-title-component';

export default class Virtual extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {y: 0, height: 0};
  }

  componentDidMount() {
    setTimeout(() => {
      this.updateIframeHeight();
    }, 100);
    window.addEventListener('resize', () => this.updateIframeHeight());
  }

  updateIframeHeight = () => {
    if (window.location.pathname === "/virtual") {
      const iframe = document.getElementById('iframe');
      const y = iframe.getBoundingClientRect().top;
      const toolbarHeight = this.context.muiTheme.toolbar.height;
      const height = window.innerHeight - (y + toolbarHeight + 7);
      // if (height > 1000) this.updateIframeHeight();
      this.setState({y, height});
    }
  };

  render() {
    const src = 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435317827152!6m8!1m7!1sDV3R4lZfUPwAAAQqg2kDFw!2m2!1d39.116755!2d-77.539826!3f328!4f0!5f0.7820865974627469';
    const img = 'images/layerslider/image-1.jpg';
    return (
      <section>
        <Title render={(previousTitle) => `Virtual Tour - ${previousTitle}`} />

        <iframe
          id="iframe"
          src={src}
          style={{width: '100%', height: this.state.height}}
          frameBorder="0"
          allowFullScreen
        />
      </section>
    );
  }
};