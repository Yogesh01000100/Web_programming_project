import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Scrollbar = ({ children }) => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '4px',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Scrollbars renderThumbVertical={renderThumb}>
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
