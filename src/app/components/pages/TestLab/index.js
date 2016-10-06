import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
// import Badge from 'material-ui/Badge';
// import IconButton from 'material-ui/IconButton';
// import NotificationIcon from 'material-ui/svg-icons/social/notifications';
// import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
// import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import _ from 'lodash';
require('../../../styles/transform.css');

export default class TestLab extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object,
  };

	render() {
	  const {muiTheme} = this.context;

    return (
			<section className="container-fluid">
				<Title render={(previousTitle) => `Test Lab - ${previousTitle}`} />

        <Card>
          <CardHeader
            title="URL Avatar"
            titleColor="violet"
            subtitle="Subtitle"
            avatar="images/testimonials/lori.jpg"
          />
          <CardText>
            <TextField hintText="Hint Text" floatingLabelText="Floating Label Text"/>
            <TextField hintText="Password Field" floatingLabelText="Password" type="password"/><br/>
            <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" multiLine={true} rows={2} rowsMax={4}/><br/>
            <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" multiLine={true} rows={2} rowsMax={4}/><br/>
            <TextField hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiLine={true} rows={2}/><br/>
            <TextField hintText="Full width" fullWidth={true}/><br/>
          </CardText>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
        </Card>
      </section>
		);
	}
};

/*
<div className="text-xs-right m-r-1">
  <Badge badgeContent={4} primary={true}>
    <NotificationIcon/>
  </Badge>
  <Badge badgeContent={10} secondary={true} badgeStyle={{top:12, right:12}}>
    <IconButton tooltip="Notifications">
      <NotificationIcon/>
    </IconButton>
  </Badge>
</div>
*/

/*
<CardMedia overlay={
  <CardTitle
    title="CardMedia overlay title"
    subtitle="CardMedia overlay subtitle"
  />
}>
  <img src="images/clinic/reception.jpg"/>
</CardMedia>
*/

/*
<TextField hintText="The hint text can be as long as you want, it will wrap."/><br/>
<TextField hintText="Hint Text" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={true}/><br/>
*/