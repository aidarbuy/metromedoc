import {Card, CardText, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Link from 'react-router/lib/Link';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
require('../../../styles/bluebar.css');

const getPaperStyles = (bgColor) => {
  return {
    padding: 0,
    margin: 0,
    background: bgColor,
  };
};

const getCellStyles = (textColor, bgColor) => {
  return {
    color: textColor,
    padding: 10,
    paddingTop: 25,
    paddingBottom: 20,
    minHeight: 270,
    background: bgColor,
  };
};

const hours = [
	["Monday &ndash; Friday", "9:30 am - 7 pm"],
	["Saturday", "closed"],
  ["Sunday", "closed"],
];

const getLinkStyles = (linkColor) => {return {color:linkColor}};
// xs 544 sm 768 md 992 lg 1200 xl
const colClassName = "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-xs-center";
const zDepth = 2;

export default ({bgColor, textColor}) => (
	<div className="container-fluid">
		<div className="row">

      <Paper className={colClassName} style={getPaperStyles(bgColor)} zDepth={zDepth}>
        <div style={getCellStyles(textColor, bgColor)} className="cell">
          <h5>Clinic News</h5>
          <p>New Hours of Operation starting October 1&nbsp;st 2016. Monday through Friday 9:30 am to 7&nbsp;pm. Closed Saturdays and Sundays</p>
        </div>
      </Paper>

      <Paper className={colClassName} style={getPaperStyles(bgColor)} zDepth={zDepth}>
        <div style={getCellStyles(textColor, bgColor)} className="cell">
          <h5>Contact Info</h5>
          <p><a href="tel:7036874158" style={getLinkStyles(textColor)}>(703) 687-4158</a></p>
          <p><Link to="/location" style={getLinkStyles(textColor)}>952 Edwards Ferry Rd NE</Link><br/><Link to="/location" style={getLinkStyles(textColor)}>Leesburg, VA 20176</Link></p>
          <p><a href="mailto:info@metromeduc.com" style={getLinkStyles(textColor)}>info@metromeduc.com</a></p>
        </div>
      </Paper>

      <Paper className={colClassName} style={getPaperStyles(bgColor)} zDepth={zDepth}>
        <div style={getCellStyles(textColor, bgColor)} className="cell">
          <h5>Hours of Operation</h5>
          <Table style={{background:bgColor}}>
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
                  }} dangerouslySetInnerHTML={{__html:arr[0]}}/>
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
        </div>
      </Paper>

      <Paper className={colClassName} style={getPaperStyles(bgColor)} zDepth={zDepth}>
        <div style={getCellStyles(textColor, bgColor)} className="cell">
          <h5>Urgent Care</h5>
          <p>Our Emergency Medicine doctors can diagnose and treat a wide variety of illnessess and injuries.</p>
        </div>
      </Paper>

		</div>
	</div>
);