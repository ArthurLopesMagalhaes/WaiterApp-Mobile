import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 48px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#999" : "#d73035")};
`;
