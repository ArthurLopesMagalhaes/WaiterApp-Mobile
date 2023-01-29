import { FlatList, Touchable, TouchableOpacity } from "react-native";
import { products } from "../../mocks/products";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import {
  ProductImage,
  Product,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";

export const Menu = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product._id}
      style={{ marginTop: 24 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Product>
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
          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
};
