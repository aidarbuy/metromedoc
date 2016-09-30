import Master from './components/Master';

export default [{
  component: Master,
  childRoutes: [
    {path: '/', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Home').default)
      })
    }},
    {path: '/about', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/About').default)
      })
    }},
    {path: '/services', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Services').default)
      })
    }},
    {path: '/doctors', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Doctors').default)
      })
    }},
    {path: '/doctors/:id', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Doctor').default)
      })
    }},
    {path: '/articles', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Articles').default)
      })
    }},
    {path: '/articles/:id', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Article').default)
      })
    }},
    {path: '/location', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Location').default)
      })
    }},
    {path: '/virtual', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Virtual').default)
      })
    }},
    {path: '/gallery', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Gallery').default)
      })
    }},
    {path: '/telemed', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Telemed').default)
      })
    }},
    {path: '/auth', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/Auth').default)
      })
    }},
    {path: '/testlab', getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/pages/TestLab').default)
      })
    }},
  ]
}];