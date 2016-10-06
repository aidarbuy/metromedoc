import {Tab, Tabs} from 'material-ui/Tabs';
import {getMenuItems} from '../data/menu-items';

const style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 0,
  maxWidth: 900,
};

export default ({bgColor, handleActive, isAppbarFixed}) => (
	<div style={{background:bgColor, paddingTop:57}}>
		<Tabs className="hidden-sm-down" value={"/" + window.location.pathname.split('/')[1]} style={style}>
			{getMenuItems().map((item, i) => (
				<Tab key={i} label={item.name} onActive={handleActive} value={item.route}/>
			))}
		</Tabs>

		<Tabs className="hidden-xs-down hidden-md-up" value={"/" + window.location.pathname.split('/')[1]}>
			{getMenuItems().map((item, i) => (
				<Tab key={i} icon={item.icon} onActive={handleActive} value={item.route}/>
			))}
		</Tabs>

		<Tabs className="hidden-sm-up" value={"/" + window.location.pathname.split('/')[1]}>
			{getMenuItems().map((item, i) => {
				if (i < 4 || i === 5)
					return <Tab key={i} icon={item.icon} onActive={handleActive} value={item.route}/>;
			})}
		</Tabs>
	</div>
);