import {Tab, Tabs} from 'material-ui/Tabs';
import {getMenuItems} from '../data/menu-items';

export default ({bgColor, handleActive, isAppbarFixed})=>(
	<div className="hidden-lg" style={{background:bgColor, paddingTop:57}}>
		<Tabs className="hidden-xs hidden-sm visible-md visible-lg" value={"/" + window.location.pathname.split('/')[1]} style={{marginLeft:'auto', marginRight:'auto', paddingTop:17, maxWidth:1000}}>
			{getMenuItems().map((item, i) => (
				<Tab key={i} icon={item.icon} label={item.name} onActive={handleActive} value={item.route}/>
			))}
		</Tabs>

		<Tabs className="hidden-xs visible-sm hidden-md hidden-lg" value={"/" + window.location.pathname.split('/')[1]}>
			{getMenuItems().map((item, i) => (
				<Tab key={i} icon={item.icon} onActive={handleActive} value={item.route}/>
			))}
		</Tabs>

		<Tabs className="visible-xs hidden-sm hidden-md hidden-lg" value={"/" + window.location.pathname.split('/')[1]}>
			{getMenuItems().map((item, i) => {
				if (i < 4 || i === 5)
					return <Tab key={i} icon={item.icon} onActive={handleActive} value={item.route}/>;
			})}
		</Tabs>
	</div>
);