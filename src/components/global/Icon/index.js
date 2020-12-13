import React from 'react';
import { useTheme } from 'styled-components';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({ size = 18, color, usePrimaryColor, name = 'rocket' }) => {
  const theme = useTheme();

  return (
    <Ionicons
      size={size}
      color={usePrimaryColor ? theme.colors.primary : color}
      name={name}
    />
  );
};

export default Icon;
