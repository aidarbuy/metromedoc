import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

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
const imgSrc = 'images/doctors/x-ray-710x399.jpg';

export default ({imgSubtitleColor, primaryColor, textColor}) => (
  <Card>
    <CardTitle title={<h3 style={{color: primaryColor}}>About our clinic</h3>}/>

    <CardMedia overlayContentStyle={{bottom: -1}} overlay={
      <CardTitle
        title="Our X-Ray system"
        subtitle="We have laboratory and pharmacy"
        subtitleStyle={{color: imgSubtitleColor}}
        style={{paddingTop: 0, paddingBottom: 10}}
      />
    }>
      <img src={imgSrc} style={{marginBottom: 1}} />
    </CardMedia>

    <CardText style={{paddingBottom: 20}}>
      <List>
        {items.map((item, i) => (
          <div key={i}>
            <ListItem disabled style={{color: textColor, lineHeight: 1.68}}>{item[0]}</ListItem>

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