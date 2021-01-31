import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

function useScreenFocus(reloadFunction) {
  const [data, setData] = useState();

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      console.log('rorando');
      reloadFunction();
      return () => {
        isActive = false;
      };
    }, []),
  );

  return [data, setData];
}
export default useScreenFocus;
