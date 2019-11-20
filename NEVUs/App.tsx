import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';
import MenuScreen from './screens/MenuScreen';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

const navigator = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
        Menu: MenuScreen
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            header: null
        }
    }
)

export default createAppContainer(navigator);
