import React from 'react';
import Icon from '../../global/Icon';
import { StarButton, StarContainer } from './styles';
import colors from '~/constants/colors';

const StarsRating = ({ isButton = false, selectedStars, changeRating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <StarContainer>
      {stars.map(index => (
        <StarButton
          onPress={() => changeRating(index)}
          disabled={!isButton}
          key={index}
        >
          <Icon
            name="star"
            size={24}
            color={index <= selectedStars ? colors.primary : colors.gray}
          />
        </StarButton>
      ))}
    </StarContainer>
  );
};

export default StarsRating;
