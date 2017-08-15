import { TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../Components/Home';

const TabNavigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#314acf',
    labelStyle: {
      fontSize: 12
    },
    labelStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    style: {
      display: 'flex',
      borderColor: 'black'
    }
  }
};

const BaseNavigation = TabNavigator(
  {
    Home: {
      screen: Home,
      initialRouteName: Home,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    // WelcomeScreen1: { screen: Home }
  },
  TabNavigatorConfig
);

export default BaseNavigation;
