import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './components/Master';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Doctors from './components/pages/Doctors';
import Doctor from './components/pages/Doctor';
import Articles from './components/pages/Articles';
import Location from './components/pages/Location';
import Virtual from './components/pages/Virtual';
import Gallery from './components/pages/Gallery';

import RequiredKnowledge from './components/pages/get-started/RequiredKnowledge';
import Installation from './components/pages/get-started/Installation';
import Usage from './components/pages/get-started/Usage';
import Examples from './components/pages/get-started/Examples';
import ServerRendering from './components/pages/get-started/ServerRendering';

import Colors from './components/pages/customization/Colors';
import Themes from './components/pages/customization/Themes';
import Styles from './components/pages/customization/Styles';

import Community from './components/pages/discover-more/Community';
import Contributing from './components/pages/discover-more/Contributing';
import Showcase from './components/pages/discover-more/Showcase';
import RelatedProjects from './components/pages/discover-more/RelatedProjects';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="about" component={About} />
    <Route path="services" component={Services} />
    <Route path="doctors" component={Doctors}>
        <Route path=":id" component={Doctor}/>
    </Route>
    <Route path="articles" component={Articles} />
    <Route path="location" component={Location} />
    <Route path="virtual" component={Virtual} />
    <Route path="gallery" component={Gallery} />
  </Route>
);

export default AppRoutes;

// <Redirect from="get-started" to="/get-started/required-knowledge" />
// <Route path="get-started">
//   <Route path="required-knowledge" component={RequiredKnowledge} />
//   <Route path="installation" component={Installation} />
//   <Route path="usage" component={Usage} />
//   <Route path="examples" component={Examples} />
//   <Route path="server-rendering" component={ServerRendering} />
// </Route>
// <Redirect from="customization" to="/customization/themes" />
//   <Route path="customization">
//   <Route path="colors" component={Colors} />
//   <Route path="themes" component={Themes} />
//   <Route path="styles" component={Styles} />
//   </Route>
//   <Redirect from="discover-more" to="/discover-more/community" />
//   <Route path="discover-more">
//   <Route path="community" component={Community} />
//   <Route path="contributing" component={Contributing} />
//   <Route path="showcase" component={Showcase} />
//   <Route path="related-projects" component={RelatedProjects} />
//   </Route>
