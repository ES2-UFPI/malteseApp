import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import { navigate } from './RootNavigation';
import ProviderHome from '~/pages/Provider/Orders';
import OrderDetails from '~/pages/Provider/Orders/OrderDetails';
import Products from '~/pages/Provider/Products';
import ManageProduct from '~/pages/Provider/Products/ManageProduct';
import { AuthContext } from '~/context/AuthProvider';

import { Icon } from '~/components/global';
import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();
const ProviderOrdersStack = createStackNavigator();
const ProviderProductStack = createStackNavigator();

export default function AppRoutes() {
  const { handleSignOut } = useContext(AuthContext);

  function ProviderOrdersStackScreen() {
    return (
      <ProviderOrdersStack.Navigator>
        <ProviderOrdersStack.Screen
          name="Home"
          component={ProviderHome}
          options={() => ({
            title: 'Seus pedidos',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Medium',
              fontSize: 24,
              marginRight: 40,
            },
            headerTintColor: colors.primary,
            headerLeft: () => (
              <TouchableOpacity onPress={handleSignOut}>
                <Icon
                  name="ios-arrow-back-circle-outline"
                  size={26}
                  color={colors.gray}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <ProviderOrdersStack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={() => ({
            title: 'Detalhes do pedido',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Medium',
              fontSize: 24,
              marginRight: 40,
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
          if (route.name === 'Products') {
            iconName = focused
              ? 'format-list-checkbox'
              : 'format-list-checkbox';
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
