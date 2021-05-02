import React from 'react';

const mystyle = {
  color: "white",
  backgroundColor: "lightblue",
  padding: "10px",
  fontFamily: "Arial",

  
};
const Grandchild = (props) => (
  <h1 style={mystyle}> Background Color: {props.theme}</h1>
)

export default Grandchild;