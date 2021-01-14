import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Store from '~/pages/Store';
import Fridge from '~/pages/Fridge';
import Orders from '~/pages/Orders';
import OrderDetails from '~/pages/Orders/OrderDetails';

import ClientHome from '~/pages/Client/Home';
import ProviderHome from '~/pages/Provider/Home';

import { Icon } from '~/components/global';
import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();
const ProviderHomeStack = createStackNavigator();

export default function AppRoutes() {
  function ProviderHomeStackScreen() {
    return (
      <ProviderHomeStack.Navigator>
        <ProviderHomeStack.Screen
          name="Home"
          component={ProviderHome}
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
      </ProviderHomeStack.Navigator>
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
      <Tab.Screen name="Home" component={ProviderHomeStackScreen} />
    </Tab.Navigator>
  );
}
