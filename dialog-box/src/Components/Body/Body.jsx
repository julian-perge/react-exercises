import React from 'react';

function Body(strBody) {
  return <main className="body">{strBody}</main>;
}

Body.defaultProps = {
  strBody: 'Something has gone horribly wrong',
};

export default Body;
