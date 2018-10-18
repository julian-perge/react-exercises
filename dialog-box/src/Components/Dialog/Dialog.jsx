import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './Dialog.css';
import Title from '../Title/Title';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const DialogBox = ({ children }) => (
  <div className="dialog">
    {children.map(child => (
      <DialogChildren key={child.id} component={child} />
    ))}
  </div>
);

const DialogChildren = ({ component }) => (
  <span>
    {component.props.children || component.type.defaultProps.children}
  </span>
);

DialogBox.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
    PropTypes.string,
  ),
};

DialogBox.defaultProps = {
  children: [
    <Title key={1} />,
    <Body key={2} />,
    <Footer key={3} />,
  ],
};

/* <Title title={<h1>This Is Important</h1>} />,
    <Body text={<span>Here is some important text or error or something.</span>} />,
    <Footer footer={<button type="button">Close</button>} />, */


export default DialogBox;
