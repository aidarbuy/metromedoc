// import Helmet from 'react-helmet';
import Title from 'react-title-component';
import React from 'react';

class Virtual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentWillMount() {
    this.updateHeight();
    window.addEventListener('resize', (event) => {
      this.updateHeight();
    });
  }

  updateHeight() {
    var height = window.innerHeight - this.context.muiTheme.appBar.height*2 - this.context.muiTheme.toolbar.height*2 - 64;
    // if (height < 200) height = 200;
    this.setState({height});
  }

  render() {
    const { primary2Color } = this.context.muiTheme.palette;

    return (
      <section>
        <Title render={(previousTitle) => `Virtual Tour - ${previousTitle}`} />

        <p style={{color:primary2Color, textAlign:'center'}}>Walk through our clinic in 360° virtual tour:</p>

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
}

Virtual.contextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Virtual;