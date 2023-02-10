import { useState } from "react";
import { FlatList, Touchable, TouchableOpacity } from "react-native";
import { products } from "../../mocks/products";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { Text } from "../Text";
import {
  ProductImage,
  ProductContainer,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";

type MenuProps = {
  onAddToCart: (product: Product) => void;
  products: Product[];
};

export const Menu = ({ onAddToCart, products }: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        style={{ marginTop: 24 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <ProductContainer onPress={() => handleOpenModal(item)}>
            <ProductImage
              source={{
                uri: `http://10.0.2.2:3333/uploads/${item.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{item.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {item.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(item.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(item)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </>
  );
};
