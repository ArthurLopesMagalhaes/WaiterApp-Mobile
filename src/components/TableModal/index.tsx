import { useState } from "react";
import { Modal, Platform, TouchableOpacity } from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
};

const isAndroid = Platform.OS === "android";

export const TableModal = ({ visible, onClose, onSave }: Props) => {
  const [table, setTable] = useState("");

  const handleSave = () => {
    onSave(table);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={isAndroid ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              keyboardType="number-pad"
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              onChangeText={(txt) => setTable(txt)}
            />
          </Form>
          <Button
            label="Salvar"
            onPress={handleSave}
            disabled={table.length === 0}
          />
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
