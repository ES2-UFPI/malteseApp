import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '~/pages/Home';
import Store from '~/pages/Store';

import { Icon } from '~/components/global';
import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.dark,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Store" component={Store} />
    </Tab.Navigator>
  );
}
