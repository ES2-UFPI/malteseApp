import React from 'react';

import { Text } from './styles';

const CustomText = (props, { primaryFont = false }) => {
  return <Text primaryFont={primaryFont} {...props} />;
};

export default CustomText;
