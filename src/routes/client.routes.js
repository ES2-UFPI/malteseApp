import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import SearchProduct from '~/pages/Client/Store/SearchProduct';
import Store from '~/pages/Client/Store';
import Fridge from '~/pages/Client/Fridge';
import Orders from '~/pages/Client/Orders';
import OrderDetails from '~/pages/Client/Orders/OrderDetails';

import ClientHome from '~/pages/Client/Home';
import { navigate } from './RootNavigation';

import { Icon } from '~/components/global';
import colors from '~/constants/colors';
import { AuthContext } from '~/context/AuthProvider';

const Tab = createBottomTabNavigator();
const ClientHomeStack = createStackNavigator();
const OrderStack = createStackNavigator();

export default function AppRoutes() {
  const { handleSignOut } = useContext(AuthContext);

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
            headerRightContainerStyle: { paddingRight: 16 },
            headerTintColor: colors.primary,
            headerLeftContainerStyle: { color: colors.primary },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SearchProduct', route.params);
                }}
              >
                <Icon
                  style={{ padding: 8 }}
                  name="ios-search-sharp"
                  size={26}
                  color={colors.primary}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <ClientHomeStack.Screen
          name="SearchProduct"
          component={SearchProduct}
          options={({ route }) => ({
            title: 'Busca de produto',

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
            title: 'Seu pedido',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'K2D-Regular',
              marginRight: 32,
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
