import { ActivityIndicator } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({ label, onPress, disabled, loading }: Props) => {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading ? (
        <Text weight="600" color="#fff">
          {label}
        </Text>
      ) : (
        <ActivityIndicator color="#fff" />
      )}
    </Container>
  );
};
