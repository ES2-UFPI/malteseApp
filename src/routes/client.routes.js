import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Store from '~/pages/Store';
import Fridge from '~/pages/Fridge';
import Orders from '~/pages/Orders';
import OrderDetails from '~/pages/Orders/OrderDetails';

import ClientHome from '~/pages/Client/Home';

import { Icon } from '~/components/global';
import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();
const ClientHomeStack = createStackNavigator();
const OrderStack = createStackNavigator();

export default function AppRoutes() {
  function ClientHomeStackScreen() {
    return (
      <ClientHomeStack.Navigator>
        <ClientHomeStack.Screen
          name="Home"
          component={ClientHome}
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
        <ClientHomeStack.Screen
          name="Store"
          component={Store}
          options={({ route }) => ({
            title: route.params.storeName,
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Regular',
            },
            headerLeft: false,
          })}
        />
      </ClientHomeStack.Navigator>
    );
  }

  function OrderStackScreen() {
    return (
      <OrderStack.Navigator>
        <OrderStack.Screen
          name="Pedidos"
          component={Orders}
          options={() => ({
            title: 'Seus pedidos',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Regular',
            },
            headerLeft: false,
          })}
        />
        <OrderStack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={() => ({
            title: 'Detalhes do pedido',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Regular',
            },
          })}
        />
      </OrderStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Geladeira') {
            iconName = focused ? 'fridge' : 'fridge-outline';
          } else if (route.name === 'Pedidos') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
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
      <Tab.Screen name="Home" component={ClientHomeStackScreen} />
      <Tab.Screen name="Pedidos" component={OrderStackScreen} />
      <Tab.Screen name="Geladeira" component={Fridge} />
    </Tab.Navigator>
  );
}
