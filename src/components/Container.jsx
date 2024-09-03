import React from 'react';

const Container = ({ children, design }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 py-2 ${design}`}>
      {children}
    </div>
  );
};

export default Container;
