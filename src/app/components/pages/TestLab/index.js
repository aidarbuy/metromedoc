import {Component} from 'react';
import Title from 'react-title-component';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';

import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import MarkdownElement from '../../MarkdownElement';

import AppBottomNav from '../../AppBottomNav';

export default class TestLab extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section>
				<Title render={(previousTitle) => `Test Lab - ${previousTitle}`} />

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
            <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
            <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
            {/*<!-- Optional: clear the XS cols if their content doesn't match in height -->*/}
            <div className="clearfix visible-xs-block"></div>
            <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
          </div>
        </div>

        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Library</a></li>
          <li className="active">Data</li>
        </ol>

        <div className="page-header">
          <h1>Example page header <small>Subtext for header</small></h1>
        </div>

        <div className="jumbotron">
          <h1>Hello, world!</h1>
          <p>...</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>

        <div className="text-right">
          <ul className="nav nav-pills" role="tablist">
            <li role="presentation" className="active">
              <a href="#">Home <span className="badge">42</span></a>
            </li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation">
              <a href="#">Messages <span className="badge">3</span></a>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <a href="#">Inbox <span className="badge">42</span></a>

          <button className="btn btn-primary" type="button">
            Messages <span className="badge">4</span>
          </button>
        </div>

        <div className="text-center">
          <div className="btn-toolbar text-center" role="toolbar" aria-label="...">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">Left</button>
              <button type="button" className="btn btn-default">Middle</button>
              <button type="button" className="btn btn-default">Right</button>
            </div>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">Left</button>
              <button type="button" className="btn btn-default">Middle</button>
              <button type="button" className="btn btn-default">Right</button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default">Left</button>
            <button type="button" className="btn btn-default">Middle</button>
            <button type="button" className="btn btn-default">Right</button>
          </div>
        </div>

        <div className="text-center">
          <button type="button" className="btn btn-default" aria-label="Left Align">
            <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
          </button>
        </div>

        <div className="text-center">
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span>
            Enter a valid email address
          </div>
        </div>

        <MarkdownElement text="###Markdown Element"/>
        
        <div className="text-right" style={{marginRight:20}}>
          <Badge badgeContent={
            <IconButton tooltip="Backup"><UploadIcon/></IconButton>} primary={false}>
            <FolderIcon/>
          </Badge>
          <Badge badgeContent="&copy;" badgeStyle={{fontSize:20}}>
            Company Name
          </Badge>
          <Badge badgeContent={4} primary={true}>
            <NotificationIcon/>
          </Badge>
          <Badge badgeContent={10} secondary={true} badgeStyle={{top:12, right:12}}>
            <IconButton tooltip="Notifications">
              <NotificationIcon/>
            </IconButton>
          </Badge>
        </div>

        <Card
          style={{/*background:'green'*/}}
          containerStyle={{/*background:'red'*/}}
          onExpandChange={(newExpandedState)=>console.debug("expand changed:", newExpandedState)}
        >
          <CardHeader
            title="URL Avatar"
            titleColor="violet"
            titleStyle={{/*background:'lightblue'*/}}
            subtitle="Subtitle"
            subtitleStyle={{/*color:'yellow'*/}}
            avatar="images/testimonials/lori.jpg"
            expandable={false}
            showExpandableButton={true}
            style={{/*background:'teal'*/}}
            textStyle={{color:'orange'}}
          />
          <CardMedia overlay={
            <CardTitle
              title="CardMedia overlay title"
              subtitle="CardMedia overlay subtitle"
            />
          }>
            <img src="sliderimages/455293175_1280.jpg"/>
          </CardMedia>
          <CardTitle
            title="Card title"
            subtitle="Card subtitle"
          />
          <CardText>
            <TextField hintText="Hint Text"/><br/><br/>
            <TextField hintText="The hint text can be as long as you want, it will wrap."/><br/>
            <TextField id="text-field-default" defaultValue="Default Value"/><br/>
            <TextField hintText="Hint Text" floatingLabelText="Floating Label Text"/><br/>
            <TextField hintText="Hint Text" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={true}/><br/>
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

        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Aciton1"/>
            <FlatButton label="Aciton2"/>
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
        <AppBottomNav/>
      </section>
		);
	}
};