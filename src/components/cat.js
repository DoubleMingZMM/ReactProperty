import React from 'react';
function Cat(props) {
  const { mouse } = props;
  return (
    <img src="/reacthooks/src/imgs/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="cat" />
  );
}

export default Cat;