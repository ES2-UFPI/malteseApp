import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '~/context/AuthProvider';

import DelivererHome from '~/pages/Deliverer/Home';
import { Icon } from '~/components/global';
import Orders from '~/pages/Deliverer/Orders';
import OrderDetails from '~/pages/Deliverer/Orders/OrderDetails';
import colors from '~/constants/colors';

const Tab = createBottomTabNavigator();
const DelivererHomeStack = createStackNavigator();
const DelivererOrdersStack = createStackNavigator();

export default function AppRoutes() {
  const { handleSignOut } = useContext(AuthContext);

  // function DelivererHomeStackScreen() {
  //   return (
  //     <DelivererHomeStack.Navigator>
  //       <DelivererHomeStack.Screen
  //         name="Home"
  //         component={DelivererHome}
  //         options={() => ({
  //           title: ' Maltese ',
  //           headerTitleStyle: {
  //             textAlign: 'center',
  //             alignSelf: 'center',
  //             fontFamily: 'K2D-Medium',
  //             fontSize: 24,
  //             marginRight: 40,
  //           },
  //           headerTintColor: colors.primary,
  //           headerLeft: () => (
  //             <TouchableOpacity onPress={handleSignOut}>
  //               <Icon
  //                 name="ios-arrow-back-circle-outline"
  //                 size={26}
  //                 color={colors.gray}
  //               />
  //             </TouchableOpacity>
  //           ),
  //         })}
  //       />
  //     </DelivererHomeStack.Navigator>
  //   );
  // }

  function DelivererOrdersStackScreen() {
    return (
      <DelivererOrdersStack.Navigator>
        <DelivererOrdersStack.Screen
          name="Home"
          component={Orders}
          options={() => ({
            title: 'Pedidos',
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
        <DelivererOrdersStack.Screen
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
      </DelivererOrdersStack.Navigator>
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
      <Tab.Screen name="Home" component={DelivererOrdersStackScreen} />
    </Tab.Navigator>
  );
}
