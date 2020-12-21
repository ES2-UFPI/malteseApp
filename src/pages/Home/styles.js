import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled(CustomText)`
  margin: 20px;
`;
export const HighlightStoreContainer = styled.View`
  flex: 1;
  align-self: center;
  align-items: center;
  margin: 18px 0px;
`;

export const HighlightStoreButton = styled.TouchableOpacity`
  border-radius: 20px;
`;

export const HighlightStoreImage = styled.Image`
  border-radius: 20px;
  width: 350px;
  height: 180px;
  overflow: hidden;
`;

export const SectionContainer = styled.View`
  padding: 20px 0px 20px 20px;
`;

export const SectionTitle = styled(CustomText)`
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
`;

export const StoresList = styled.FlatList``;
