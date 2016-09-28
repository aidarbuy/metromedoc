import {Component} from 'react';
import Title from 'react-title-component';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {authorizeWithGithub} from '../../../data/firebase';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

export default class Auth extends Component {
  render() {
    return (
      <section className="text-center">
        <Title render={(previousTitle) => `Authorization - ${previousTitle}`} />

        <RaisedButton
          label="Github"
          onTouchTap={authorizeWithGithub}
          secondary={true}
          style={styles.button}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
      </section>
    );
  }
};