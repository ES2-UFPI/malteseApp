import React from 'react';
import { useTheme } from 'styled-components';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({
  size = 18,
  color,
  usePrimaryColor,
  name = 'rocket',
  communityIcons = false,
}) => {
  const theme = useTheme();

  if (communityIcons) {
    return (
      <MaterialCommunityIcons
        size={size}
        color={usePrimaryColor ? theme.colors.primary : color}
        name={name}
      />
    );
  }

  return (
    <Ionicons
      size={size}
      color={usePrimaryColor ? theme.colors.primary : color}
      name={name}
    />
  );
};

export default Icon;
