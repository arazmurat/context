import React from 'react';
import Grandchild from './GrandChild'

const Child = (props) => (
  <Grandchild theme = {props.theme} />
)

export default Child;