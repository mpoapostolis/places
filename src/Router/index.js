import { TabNavigator, TabBarBottom } from 'react-navigation';
import WelcomeScreen from '../Components/WelcomeScreen';

const TabNavigatorConfig = {
  tabBarComponent: TabBarBottom
};

const BaseNavigation = TabNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        // tabBarVisible: false
      }
    },
    WelcomeScreen1: { screen: WelcomeScreen }
  },
  TabNavigatorConfig
);

export default BaseNavigation;
