import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import { getMenuItems } from '../data/menu-items';

export default ({bgColor, handleActive, isAppbarFixed, route})=>(
	<div style={{background:bgColor, paddingTop:57}}>
		<Tabs className="apptabs-icons-labels" value={window.location.pathname} style={{marginLeft:'auto', marginRight:'auto', paddingTop:7, maxWidth:1000}}>
			{getMenuItems().map((item, i) => (
				<Tab key={i} icon={item.icon} label={item.name} onActive={handleActive} value={item.route}/>
			))}
		</Tabs>

		<Tabs className="apptabs-7-icons" value={window.location.pathname}>
			{getMenuItems().map((item, i) => (
				<Tab key={i} icon={item.icon} onActive={handleActive} value={item.route}/>
			))}
		</Tabs>

		<Tabs className="apptabs-5-icons" value={window.location.pathname}>
			{getMenuItems().map((item, i) => {
				if (i < 4 || i === 5)
					return <Tab key={i} icon={item.icon} onActive={handleActive} value={item.route}/>;
			})}
		</Tabs>
	</div>
);