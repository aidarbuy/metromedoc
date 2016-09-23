import React from 'react';
import {render} from 'react-dom';
// import {Router, browserHistory} from 'react-router';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
// import AppRoutes from './AppRoutes';
import Routes from './Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import {createHashHistory} from 'history';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/reactjs/react-router/blob/master/docs/guides/README.md
 */
render(
  <Router
    history={browserHistory}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {Routes}
  </Router>
, document.getElementById('app'));

// history={useRouterHistory(createHashHistory)({queryKey: false})}
