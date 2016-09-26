import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Icon = (props) => (
  <SvgIcon {...props}>
  	<path d="M24 9.203 c-1-3.89-6.080-6.2-10-6.2-7.73 0-14 6-14 14 0 15 14.26 19 22 28 0.069 0.1 0.15 0.181 0.24 0.27 0.979 0.971 2.56 0.971 3.539 0 0.091-0.089 0.15-0.17 0.221 -0.27 7.75-9.020 22-12.939 22-28 0-8-6.27-14-14-14-3.92 0-9 2.31-10 6.2z M34.65 12.003 c-0.94-0.17-1.65-0.99 -1.65-1.97 0-1.1 0.9-2.030 2-2.030 1.59 0 3.52 1.13 5.14 2.73 1.65 1.64 2.86 3.83 2.86 5.27 0 1.1-0.9 2-2 2-0.98 0-1.8-0.71-1.971-1.65-0.5-2.010-2.218-3.85-4.379-4.35z" />
  </SvgIcon>
);

export default (props) => (
  <Icon style={props.styles} color={props.styles.color} hoverColor={props.styles.hover} viewBox="0 0 49 49" />
);