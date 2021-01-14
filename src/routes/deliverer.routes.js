import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import DelivererHome from '~/pages/Deliverer/Home';
import { Icon } from '~/components/global';

import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();
const DelivererHomeStack = createStackNavigator();

export default function AppRoutes() {
  function DelivererHomeStackScreen() {
    return (
      <DelivererHomeStack.Navigator>
        <DelivererHomeStack.Screen
          name="Home"
          component={DelivererHome}
          options={() => ({
            title: ' Maltese ',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Medium',
              fontSize: 24,
            },
            headerTintColor: colors.primary,
          })}
        />
      </DelivererHomeStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }

          return (
            <Icon name={iconName} size={size} color={color} communityIcons />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.dark,
      }}
    >
      <Tab.Screen name="Home" component={DelivererHomeStackScreen} />
    </Tab.Navigator>
  );
}
