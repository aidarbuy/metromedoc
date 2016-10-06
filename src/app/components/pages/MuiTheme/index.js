import {Component, PropTypes} from 'react';
import Title from 'react-title-component';
// import Badge from 'material-ui/Badge';
// import IconButton from 'material-ui/IconButton';
// import NotificationIcon from 'material-ui/svg-icons/social/notifications';
// import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
// import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import _ from 'lodash';
require('../../../styles/transform.css');

export default class MuiTheme extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object,
  };

	render() {
	  const {muiTheme} = this.context;

    return (
			<section className="container-fluid">
				<Title render={(previousTitle) => `Test Lab - ${previousTitle}`} />

        <div className="row">
          {Object.keys(muiTheme).map(key => (
            <div key={key} className="col-xs-4 margin-top">{
              typeof muiTheme[key] === 'object' ?
                <Card>
                  <CardTitle title={key} subtitle={typeof muiTheme[key]}
                    titleColor={muiTheme.palette.alternateTextColor}
                    subtitleColor={muiTheme.palette.alternateTextColor}
                    className="p-l-2"
                    style={{background:muiTheme.palette.primary2Color}}
                  />
                  <CardText>
                    {Object.keys(muiTheme[key]).map((propName, i, arr) => (
                      <ListItem key={i}>{propName}: {
                        typeof muiTheme[key][propName] === 'object' ?
                        <List>
                          {Object.keys(muiTheme[key][propName]).map(prop => (
                            <ListItem key={prop}>{muiTheme[key][propName][prop]}</ListItem>
                          ))}
                        </List> :
                        muiTheme[key][propName]}
                        {i < arr.length - 1 ? <Divider style={{transform:'translateY(16px)'}}/> : null}
                      </ListItem>
                    ))}
                  </CardText>
                </Card> :
              typeof muiTheme[key] === 'string' ?
                <Card>
                  <CardTitle title={key} subtitle={typeof muiTheme[key]}
                    titleColor={muiTheme.palette.alternateTextColor}
                    subtitleColor={muiTheme.palette.alternateTextColor}
                    className="p-l-2"
                    style={{background:muiTheme.palette.accent1Color}}
                  />
                  <CardText>
                    <ListItem>{muiTheme[key]}</ListItem>
                  </CardText>
                </Card> :
              typeof muiTheme[key] === 'boolean' ?
                <Card>
                  <CardTitle title={key} subtitle={typeof muiTheme[key]}
                    titleColor={muiTheme.palette.alternateTextColor}
                    subtitleColor={muiTheme.palette.alternateTextColor}
                    titleStyle={{fontStyle:'italic'}}
                    className="p-l-2"
                    style={{background:muiTheme.palette.accent1Color}}
                  />
                  <CardText>
                    <ListItem>{muiTheme[key].toString()}</ListItem>
                  </CardText>
                </Card> :
              typeof muiTheme[key] === 'function' ?
                <Card>
                  <CardTitle title="function" subtitle={typeof muiTheme[key]}
                    titleColor={muiTheme.palette.alternateTextColor}
                    subtitleColor={muiTheme.palette.alternateTextColor}
                    className="p-l-2"
                    style={{background:muiTheme.palette.accent1Color}}
                  />
                  <CardText><pre><code>{muiTheme[key].toString()}</code></pre></CardText>
                </Card> : console.debug(key)
            }</div>
          ))}
        </div>
        {/*
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
        */}
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