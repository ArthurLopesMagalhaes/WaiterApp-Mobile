import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisibel] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button
            label="Novo Pedido"
            onPress={() => setIsTableModalVisibel(true)}
          />
        </FooterContainer>
      </Footer>
      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisibel(false)}
        onSave={handleSaveTable}
      />
    </>
  );
};
