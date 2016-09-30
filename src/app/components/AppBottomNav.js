import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Star from 'material-ui/svg-icons/toggle/Star';

export default () => (
  <Paper style={{marginBottom:20}}>
    <BottomNavigation selectedIndex={1}>
      <BottomNavigationItem
        label="Recents"
        icon={<Star/>}
      />
    </BottomNavigation>
  </Paper>
);