import React from 'react';
import SearchAppBar from './header';
import TextMobileStepper from './caroucel';






const Layout = (props) => {
  const { children } = props

  return (

    <div >
      < SearchAppBar />
      <TextMobileStepper />
      {children}

    </div>


  );
};

export default Layout;