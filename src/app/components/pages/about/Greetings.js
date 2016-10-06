import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import {Table, TableRow, TableRowColumn, TableBody} from 'material-ui/Table';

const pairArray = (arr) => {
	var arrPaired = [];
	for (var i = 0; i <= arr.length - 1; i += 2) {
		var pairObj = [];
		pairObj.push(arr[i]);
		pairObj.push(arr[i + 1]);
		arrPaired.push(pairObj);
	}
	return arrPaired;
};

const conditions = [
	'Asthma', 'Abdominal Pain', 
	'Allergic Reactions', 'Bites/Stings', 
	'Broken Bones & Sprains', 'Burns', 
	'Eye Injuries', 'Lacerations', 
	'Rashes', 'Sore Throats', 
	'Sports Injuries', 'DOT Physicals', 
	'Travel Medicine', 'Chest Pain', 
	'Occupational Health', 'and many other...'
];

const conditionsPaired = pairArray(conditions);
// const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Fteam%2Fthree-medics.jpg?alt=media&token=41848778-abf1-49bf-95c5-864797eaedeb';
const imgSrc1 = 'images/team/three-medics.jpg';
const imgSrc2 = 'images/team/bigteam.jpg';
const imgSrc3 = 'images/team/team.jpg';
const imgSrc4 = 'images/team/screening.jpg';

export default ({accentColor, imgSubtitleColor, language, primaryColor, textColor}) => (
	<Card className="margin-top">
		<CardTitle
			title={<h4 style={{color: accentColor}}>Welcome to Metromed Urgent Care!</h4>}
			subtitle={<h5>Our Emergency Medicine doctors can diagnose a wide range of illnesses and injuries</h5>}
		/>

		<CardMedia>
			{/*<img src={imgSrc} style={{marginBottom: 1}}/>*/}
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="5000">
				<ol className="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
					<li data-target="#carousel-example-generic" data-slide-to="3"></li>
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<img src={imgSrc1} alt="First slide"/>
					</div>
					<div className="carousel-item">
						<img src={imgSrc2} alt="Second slide"/>
					</div>
					<div className="carousel-item">
						<img src={imgSrc3} alt="Third slide"/>
					</div>
					<div className="carousel-item">
						<img src={imgSrc4} alt="Third slide"/>
					</div>
				</div>
				<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span className="icon-prev" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span className="icon-next" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</CardMedia>

		<CardText style={{textAlign: 'left'}}>
			<h5>At Metromed Urgent Care we treat patients of all ages, with a variety of conditions:</h5>

			<Table className="hidden-xs-down" selectable={false}>
				<TableBody displayRowCheckbox={false} stripedRows={true} selectable={false}>
					{conditionsPaired.map((condPair, i) => (
						<TableRow key={i}>
							<TableRowColumn style={{fontSize: 16}}>{condPair[0]}</TableRowColumn>
							<TableRowColumn style={{fontSize: 16}}>{condPair[1]}</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Table className="hidden-sm-up" selectable={false}>
				<TableBody displayRowCheckbox={false} stripedRows={true}>
					{conditions.map((condition, i) => (
						<TableRow key={i}>
							<TableRowColumn style={{fontSize: 16}}>{condition}</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div style={{marginTop: 20}}>
				<em style={{color: accentColor}}>* If you feel that you need to be admitted to the hospital then it is time to go to emergency room.</em>
			</div>
		</CardText>
	</Card>
);