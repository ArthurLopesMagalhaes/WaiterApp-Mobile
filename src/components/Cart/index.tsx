import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { products } from "../../mocks/products";
import { CartItem } from "../../types/Cart";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { Text } from "../Text";
import {
  Actions,
  Container,
  Image,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer,
} from "./styles";

type CartProps = {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
};

export const Cart = ({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
}: CartProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  const handleConfirmOrder = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onConfirmOrder();
    setIsModalVisible(false);
  };

  return (
    <>
      <OrderConfirmedModal visible={isModalVisible} onOk={handleOk} />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={({ product }) => product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({ item }) => (
            <Container>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://10.0.2.2:3333/uploads/${item.product.imagePath}`,
                  }}
                />
                <QuantityContainer>
                  <Text size={14} color="#666">
                    {item.quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight="600">
                    {item.product.name}
                  </Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>
                    {formatCurrency(item.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>
              <Actions>
                <TouchableOpacity
                  onPress={() => onAdd(item.product)}
                  style={{
                    marginRight: 24,
                  }}
                >
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrement(item.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Container>
          )}
        />
      )}
      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#666">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>
        <Button
          label="Confirmar pedido"
          onPress={handleConfirmOrder}
          disabled={cartItems.length === 0}
          loading={isLoading}
        />
      </Summary>
    </>
  );
};
