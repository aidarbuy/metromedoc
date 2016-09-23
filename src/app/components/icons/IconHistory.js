import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Icon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 1c3.866 0 7 3.134 7 7s-3.134 7-7 7v-1.5c1.469 0 2.85-0.572 3.889-1.611s1.611-2.42 1.611-3.889c0-1.469-0.572-2.85-1.611-3.889s-2.42-1.611-3.889-1.611c-1.469 0-2.85 0.572-3.889 1.611-0.799 0.799-1.322 1.801-1.52 2.889h2.909l-3.5 4-3.5-4h2.571c0.485-3.392 3.402-6 6.929-6zM13 7v2h-4v-5h2v3z"></path>
  </SvgIcon>
);

module.exports = (props) => (
  <Icon style={props.styles} color={props.styles.color} hoverColor={props.styles.hover} viewBox="0 0 18 18" />
);