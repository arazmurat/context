import React from 'react';
import Child from './Child'

const ParentComponent = (props) => (
  <Child theme = {props.theme} />
)

export default ParentComponent;