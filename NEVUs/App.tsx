import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

const navigator = createStackNavigator(
    {
        Login: LoginScreen,
        screen: RegisterScreen
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            header: null
        }
    }
)

export default createAppContainer(navigator);
