import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from '~/pages/Sign';

const SignStack = createStackNavigator();

export default function Routes() {
  return (
    <SignStack.Navigator screenOptions={{ headerShown: false }}>
      <SignStack.Screen name="Sign" component={Sign} />
    </SignStack.Navigator>
  );
}
