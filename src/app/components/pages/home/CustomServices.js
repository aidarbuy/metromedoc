import Paper from 'material-ui/Paper';
import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';

const getStyles = (iconColor, hoverColor) => {
  return {
    Paper: {
      padding: 20,
      paddingTop: 40,
      textAlign: 'center',
      minHeight: 380,
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    icon: {
      display: 'inline-block',
      color: iconColor,
      hover: hoverColor,
      width: 70,
      height: 70,
    },
    text: {
      margin: 0,
      padding: 0,
      marginTop: 20,
      marginBottom: 20,
      fontSize: 16,
    },
  };
};

const getData = (iconColor, hoverColor) => {
  const styles = getStyles(iconColor, hoverColor);
  return [{
    icon: <SvgIcon style={styles.icon} color={styles.icon.color} hoverColor={styles.icon.hover} viewBox="0 0 48 48"><path d="M24 9.203 c-1-3.89-6.080-6.2-10-6.2-7.73 0-14 6-14 14 0 15 14.26 19 22 28 0.069 0.1 0.15 0.181 0.24 0.27 0.979 0.971 2.56 0.971 3.539 0 0.091-0.089 0.15-0.17 0.221 -0.27 7.75-9.020 22-12.939 22-28 0-8-6.27-14-14-14-3.92 0-9 2.31-10 6.2z M34.65 12.003 c-0.94-0.17-1.65-0.99 -1.65-1.97 0-1.1 0.9-2.030 2-2.030 1.59 0 3.52 1.13 5.14 2.73 1.65 1.64 2.86 3.83 2.86 5.27 0 1.1-0.9 2-2 2-0.98 0-1.8-0.71-1.971-1.65-0.5-2.010-2.218-3.85-4.379-4.35z"/></SvgIcon>,
    name: "Cardio Health",
    desc: "Our clinic is equipped with <strong>EKG</strong>, <strong>X-ray</strong> and <strong>Laboratory</strong>.",
    button: "About Us",
    href: "/about"
  },{
    icon: <SvgIcon style={styles.icon} color={styles.icon.color} hoverColor={styles.icon.hover} viewBox="0 0 18 18"><path d="M14 4 h-3 v-2 c 0 -0.55 -0.45 -1 -1 -1 h -4 c -0.55 0 -1 0.45 -1 1 v2 h-3 c -1.1 0 -2 0.9 -2 2 v8 c 0 1.1 0.9 2 2 2 h12 c 1.1 0 2 -0.9 2 -2 v-8 c 0 -1.1 -0.9 -2 -2 -2 z M 6 2 h4 v2 h-4 v-2 z M12 11 h-3 v3 h-2 v-3 h-3 v-2 h3 v-3 h2 v3 h3 v2 z"/></SvgIcon>,
    name: "Medical Treatment",
    desc: "We administer <strong>breathing treatments</strong>, repair <strong>lacerations</strong>, dispense <strong>medications</strong> intravenously, remove <strong>foreign objects</strong> from the eyes, and more.",
    button: "Our services",
    href: "/services"
  },{
    icon: <SvgIcon style={styles.icon} color={styles.icon.color} hoverColor={styles.icon.hover} viewBox="0 0 18 18"><path d="M17 2h-1v-1c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h1v1c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1zM2 3v10h-0.998c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-12c-0.55 0-1 0.45-1 1v0zM17 14.998c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v11.996z"></path><path d="M15 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"></path><path d="M16 14h-12v-2l3.5-6 4 5h1l3.5-3z"></path></SvgIcon>,
    name: "Photo Gallery",
    desc: "Check out our pictures!",
    button: "Gallery",
    href: "/gallery"
  },{
    icon: <SvgIcon style={styles.icon} color={styles.icon.color} hoverColor={styles.icon.hover} viewBox="0 0 24 24"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></SvgIcon>,
    name: "Virtual Tour",
    desc: "Explore our clinic in 360 degrees virtual tour",
    button: "Virtual Tour",
    href: "/virtual"
  }];
};

export default ({iconColor, hoverColor, titleColor}) => (
	<div className="container-fluid">
    <div className="row">
      {getData(iconColor, hoverColor).map((item, index) => (
        <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <Paper style={getStyles().Paper}>
            <div className="text-center">{item.icon}</div>
            <div style={{fontSize: 25, color: titleColor}}>{item.name}</div>
            <p style={getStyles().text} dangerouslySetInnerHTML={{__html: item.desc}}/>
            <RaisedButton secondary label={item.button} containerElement={<Link to={item.href}/>}/>
          </Paper>
        </div>
      ))}
    </div>
	</div>
);