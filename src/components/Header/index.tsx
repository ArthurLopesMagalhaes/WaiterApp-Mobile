import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader, Table } from "./styles";

type Props = {
  selectedTable: string;
  onCancelOrder: () => void;
};

export const Header = ({ selectedTable, onCancelOrder }: Props) => {
  return (
    <Container>
      {!selectedTable ? (
        <>
          <Text size={14} opacity={0.9}>
            Bem-vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      ) : (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} color="#d73035" weight="600">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  );
};
