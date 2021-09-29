// import defaullt libraries
import React, { Fragment, useEffect } from 'react';
import { Root, Header } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
// create store
import { LogBox, View, Text, Image } from 'react-native';
// import components
import Navigation from './src/navigation';
import { colors } from './src/styles/Colors';
import {PLATFORM} from './src/styles/Typography';

//

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./src/store/reducer";
import { watcherSaga } from "./src/store/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(watcherSaga);


  LogBox.ignoreLogs([
    'RCTBridge',
    'VirtualizedLists should never be nested'
  ]);
  LogBox.ignoreAllLogs();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isVisible: true,
      isConnected: true
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  render() {

    return (
      <Provider store={store}>
        {
            Platform.OS !== PLATFORM.IOS ? (
                <Header androidStatusBarColor={colors.GRAY} style={{height:0}} />
            ) : (null)
        }
         <Root>
          <Navigation />
         </Root>
        </Provider>
    )
  }
}

export default App;
