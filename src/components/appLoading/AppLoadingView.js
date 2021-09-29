// import defaullt libraries
import React, { Fragment, useEffect,useState } from 'react';

const AppLoadingView = (props) => {
  useEffect(() => {
    props.navigation.navigate('App');
  })
  return (<></>)
};

export default AppLoadingView;
