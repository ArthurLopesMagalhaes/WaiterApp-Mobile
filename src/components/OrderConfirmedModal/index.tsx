import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Container, OkButton } from "./styles";
import { StatusBar } from "expo-status-bar";

type OrderConfirmerdModalProps = {
  visible: boolean;
  onOk: () => void;
};

export const OrderConfirmedModal = ({
  visible,
  onOk,
}: OrderConfirmerdModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <StatusBar style="light" />
      <Container>
        <CheckCircle />
        <Text size={20} color="#fff" weight="600" style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>
        <OkButton onPress={onOk}>
          <Text color="#d73035" weight="600">
            Ok
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
};
