import { Text } from "../Text";
import { Container } from "./styles";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = ({ label, onPress, disabled }: Props) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {label}
      </Text>
    </Container>
  );
};
