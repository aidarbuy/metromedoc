import { Card, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Link from 'react-router/lib/Link';
import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
require('../../../styles/bluebar.css');

const styles = {
	CardTitle : {
		fontWeight: 400,
		paddingBottom: 0,
		paddingTop: 30,
	},
	CardText : {
		fontSize: 19,
		fontWeight: 400,
		lineHeight: 1.4,
		verticalAlign: 'middle',
		display: 'inline-block',
	},
};

const hours = [
	["Sunday", "closed"],
	["Monday &ndash; Friday", "10 am - 8 pm"],
	["Saturday", "closed"],
];

const getLinkStyles = (linkColor) => {return {color:linkColor}};

export default ({bgColor, textColor})=>(
	<div className="flex-container">
		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColor }}>
				<CardTitle title="Contact Info" titleColor={textColor} style={styles.CardTitle}/>
				<CardText color={textColor} style={styles.CardText}>
					<p><a href="tel:7036874158" style={getLinkStyles(textColor)}>(703) 687-4158</a></p>
					<p>
						<Link to="/location" style={getLinkStyles(textColor)}>952 Edwards Ferry Rd NE</Link>
						<br/>
						<Link to="/location" style={getLinkStyles(textColor)}>Leesburg, VA 20176</Link>
					</p>
					<p><a href="mailto:info@metromeduc.com" style={getLinkStyles(textColor)}>info@metromeduc.com</a></p>
				</CardText>
			</Card>
		</div>

		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColor }}>
				<CardTitle title="Hours of Operation" titleColor={textColor} style={styles.CardTitle}/>
				<CardText color={textColor} style={styles.CardText}>
					<Table style={{background: bgColor}}>
						<TableBody displayRowCheckbox={false}>
							{hours.map((arr, i) => (
								<TableRow key={i}>
									<TableRowColumn style={{
										padding: 0,
										color: textColor,
										fontSize: 'inherit',
										fontWeight: 'inherit',
										textAlign: 'right',
										width: '45%',
									}} dangerouslySetInnerHTML={{__html:arr[0]}} />
									<TableRowColumn style={{
										padding: 0,
										fontSize: 'inherit',
										fontWeight: 'inherit',
										width: '5%',
										textAlign: 'center',
										color: textColor,
									}}>:</TableRowColumn>
									<TableRowColumn style={{
										padding: 0,
										color: textColor,
										fontSize: 'inherit',
										fontWeight: 'inherit',
										width: '45%',
										textAlign: 'left',
									}}>{arr[1]}</TableRowColumn>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardText>
			</Card>
		</div>

		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColor }}>
				<CardTitle title="Urgent Care" titleColor={textColor} style={styles.CardTitle} />
				<CardText color={textColor} style={styles.CardText}>
					<p>Our Emergency Medicine doctors can diagnose and treat a wide variety of illnessess and injuries.</p>
				</CardText>
			</Card>
		</div>

		<div className="bluebar-item">
			<Card className="cell" style={{ background:bgColor }}>
				{/*<CardTitle title="Holidays" titleColor={textColor} style={styles.CardTitle}/>*/}
				<CardTitle title="New Hours of Operation starting October 1 st 2016" titleColor={textColor} style={styles.CardTitle}/>
				<CardText color={textColor} style={styles.CardText}>
					{/*<p>Major Holidays Observed</p>*/}
					<p>Monday through Friday 9 am to 7 pm<br/>Closed Saturdays and Sundays</p>
					<Divider style={{background: textColor}} />
					{/*<p>No Appointments Necessary</p>*/}
					<p>Observe Major Holidays</p>
				</CardText>
			</Card>
		</div>
	</div>
);
// <p style={{fontWeight:500, fontSize:'110%'}}>We will be closed Monday September 5 th for Labor Day</p>