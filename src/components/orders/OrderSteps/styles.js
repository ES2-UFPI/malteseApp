import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  width: 50px;
  width: 100%;
  align-self: center;
`;

export const StepRow = styled.View`
  padding: 0px 10px 2px 15px;
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const Step = styled.View`
  background: ${({ theme, activeStep }) =>
    activeStep ? theme.colors.primary : theme.colors.white};
  border: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  height: 9px;
  width: 9px;
`;

export const Line = styled.View`
  background: ${({ theme, activeStep }) =>
    activeStep ? theme.colors.primary : theme.colors.gray};
  height: 2px;
  width: 45%;
`;

export const StepLabel = styled(CustomText)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;
