import React from 'react';
import Title from '../pages/Title';
import Navs from './Navs';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="BOX OFFICE"
        subtitle="Are you looking for movie or actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
