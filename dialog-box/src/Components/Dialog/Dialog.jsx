import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './Dialog.css';
// import Title from './Components/Title/Title';
// import Body from './Components/Body/Body';
// import Footer from './Components/Footer/Footer';

function DialogBox({ children }) {
  const files = Children.toArray(children);
  console.log(files);
  return (
    <div className="dialog">
      {files.map(child => <span key={child.key} className={child.type.name}>{child.props.children}</span>)}
    </div>
  );
}

DialogBox.propTypes = {
  children: PropTypes.node,
};

DialogBox.defaultProps = {
  children: PropTypes.node,
};

export default DialogBox;
