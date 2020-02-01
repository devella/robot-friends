import React from 'react';

const Scroll = (props) => {
return (
  <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px' }}>
    {props.chidren}
  </div>

);
};
export default Scroll;