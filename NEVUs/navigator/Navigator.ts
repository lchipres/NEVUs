import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import {createBottomTabNavigator,
    createDrawerNavigator, createSwitchNavigator } from 'react-navigation'; // Remember to import the other navigators later
    
const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({ RootSwitch }),
    android: createDrawerNavigator({ RootSwitch })
  });

  const RootSwitch = createSwitchNavigator({  
    { LoginScreen, MainNavigator },
    { initialRouteName: "MainNavigator" } }); 


export default RootSwitch;