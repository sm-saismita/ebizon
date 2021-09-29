import {Dimensions} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AppLoading from '../components/appLoading';
import Home from '../components/home';
import UserDetails from '../components/userDetails';

// Module stack
const AppStack = createStackNavigator(
    // Activity
    {
        Home: Home,
        AppLoading: AppLoading,
        UserDetails: UserDetails,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
)

// Drawer Activity
const AppDrawerNavigator = createDrawerNavigator(
    {
        drawer: AppStack
    },
    {
        contentComponent: Sidebar,
        drawerWidth: Dimensions.get('window').width  * 7/8,
        drawerLockMode: 'unlocked'
    }
)

// Navigator main module, which wrap all the stacks
const AppNavigator = 
    createSwitchNavigator(
        {
            AppLoading: AppLoading,
            App: AppStack,
        },
        {
            initialRouteName: 'AppLoading',          
        }
        )


export default createAppContainer(AppNavigator)