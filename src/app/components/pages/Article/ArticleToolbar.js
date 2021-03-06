import ArrowBack from 'material-ui/svg-icons/image/navigate-before';
import ArrowForward from 'material-ui/svg-icons/image/navigate-next';
import Link from 'react-router/lib/Link';
import RaisedButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export default ({canvas, border, prev, prevBtn, label, next, nextBtn, borderTop, borderBottom}) => (
	<Toolbar noGutter={true} style={{
		background: canvas, 
		borderTop: '1px solid ' + border, 
		borderBottom: '1px solid ' + border, 
		borderTopWidth: borderTop,
		borderBottomWidth: borderBottom,
	}}>
		<ToolbarGroup firstChild={true}>
			<RaisedButton
				disabled 	  = { prevBtn }
				icon 		  = { <ArrowBack/> }
				href 		  = { "/articles/" + prev }
				label 		  = "Previous"
				labelPosition = "after"
				primary 	  = { true }
			/>
		</ToolbarGroup>

		<ToolbarGroup>
			<RaisedButton href="/articles" label={label} labelPosition="after" primary={true}/>
		</ToolbarGroup>

		<ToolbarGroup lastChild={true}>
			<RaisedButton
				containerElement={<Link to={'/articles/' + next}/>}
				icon = { <ArrowForward /> }
				label = {next}
				labelPosition = "before"
				primary = { true }
				disabled = { nextBtn } 
			/>
		</ToolbarGroup>
	</Toolbar>
);