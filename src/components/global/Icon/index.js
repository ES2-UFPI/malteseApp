import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({ size = 18, color = '#fff', name = 'rocket' }) => {
  return <Ionicons size={size} color={color} name={name} />;
};

export default Icon;
