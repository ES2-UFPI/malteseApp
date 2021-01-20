import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import { navigate } from './RootNavigation';
import ProviderHome from '~/pages/Provider/Orders';
import Products from '~/pages/Provider/Products';
import ManageProduct from '~/pages/Provider/Products/ManageProduct';

import { Icon } from '~/components/global';
import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();
const ProviderOrdersStack = createStackNavigator();
const ProviderProductStack = createStackNavigator();

export default function AppRoutes() {
  function ProviderOrdersStackScreen() {
    return (
      <ProviderOrdersStack.Navigator>
        <ProviderOrdersStack.Screen
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
      </ProviderOrdersStack.Navigator>
    );
  }

  function ProviderProductStackScreen() {
    return (
      <ProviderProductStack.Navigator>
        <ProviderProductStack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Seus Produtos',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Medium',
              fontSize: 24,
            },
            headerRightContainerStyle: { paddingRight: 16 },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('ManageProduct');
                }}
              >
                <Icon
                  style={{ padding: 8 }}
                  name="plus-circle"
                  size={26}
                  color={colors.primary}
                  communityIcons
                />
              </TouchableOpacity>
            ),
            headerTintColor: colors.primary,
          }}
        />
        <ProviderProductStack.Screen
          name="ManageProduct"
          component={ManageProduct}
          options={() => ({
            title: 'Editando Produto',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Medium',
              fontSize: 24,
            },
            headerTintColor: colors.primary,
          })}
        />
      </ProviderProductStack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Orders') {
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
      <Tab.Screen name="Orders" component={ProviderOrdersStackScreen} />
      <Tab.Screen name="Products" component={ProviderProductStackScreen} />
    </Tab.Navigator>
  );
}
