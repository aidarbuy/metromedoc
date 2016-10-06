import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';

const items = [
  ["Experienced emergency room docs and personnel"],
  ["Bed-side Ultrasound Screening"],
  ["X-Ray"],
  ["Skillfully done procedures, such as:",
    [
      "Joint aspiration",
      "Ingrown toenail removal",
      "Foreign body removal from the eye",
      "Reduction of fractures and dislocations",
    ]
  ],
  ["Laboratory and Pharmacy"],
  ["IV treatment and EKG"],
  ["Location. Yes, we are right next to Wal-Mart"],
  ["Clean, Quick and Pleasant"],
];

// const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Finterior%2Fx-ray-710x399.jpg?alt=media&token=ad530af1-0605-48a3-ae5c-1c7845d85f33';
const imgSrc1 = 'images/clinic/x-ray-710x399.jpg';
const imgSrc2 = 'images/clinic/lounge-820x465.jpg';
const imgSrc3 = 'images/clinic/reception.jpg';
const imgSrc4 = 'images/clinic/coach.jpg';

export default ({imgSubtitleColor, primaryColor, textColor}) => (
  <Card className="margin-top">
    <CardTitle title={<h3 style={{color: primaryColor}}>About our clinic</h3>}/>

    {/*<CardMedia overlayContentStyle={{bottom: -1}} overlay={*/}
      {/*<CardTitle*/}
        {/*title="Our X-Ray system"*/}
        {/*subtitle="We have laboratory and pharmacy"*/}
        {/*subtitleStyle={{color: imgSubtitleColor}}*/}
        {/*style={{paddingTop: 0, paddingBottom: 10}}*/}
      {/*/>*/}
    {/*}>*/}
      {/*<img src={imgSrc} style={{marginBottom: 1}} />*/}
    {/*</CardMedia>*/}

    <CardMedia>
      {/*<img src={imgSrc} style={{marginBottom: 1}}/>*/}
      <div id="carousel-generic" className="carousel slide" data-ride="carousel" data-interval="7000">
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
        <a className="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">
          <span className="icon-prev" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-generic" role="button" data-slide="next">
          <span className="icon-next" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </CardMedia>

    <CardText style={{paddingBottom: 20}}>
      <List>
        {items.map((item, i) => (
          <div key={i}>
            <ListItem leftAvatar={<span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>} disabled style={{color:textColor, lineHeight:1.16}}>{item[0]}</ListItem>

            {items[i].length > 1 ?
              <div style={{padding: 0, maxWidth: 350, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}>
                <ul style={{margin: 0, textAlign: 'left', lineHeight: 1.6, fontSize: 16}}>
                  {item[1].map((subitem, i) => (<li key={i}>{subitem}</li>))}
                </ul>
              </div>
            : null}

            {i < items.length - 1 ? <Divider/> : null}
          </div>
        ))}
      </List>
    </CardText>
  </Card>
);