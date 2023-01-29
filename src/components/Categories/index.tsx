import { useState } from "react";
import { FlatList } from "react-native";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <FlatList
      data={categories}
      keyExtractor={({ _id }) => _id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      renderItem={({ item }) => (
        <Category
          onPress={() =>
            setSelectedCategory(() =>
              item._id === selectedCategory ? "" : item._id
            )
          }
          active={selectedCategory === item._id}
        >
          <Icon>
            <Text>{item.icon}</Text>
          </Icon>
          <Text size={14} weight="600">
            {item.name}
          </Text>
        </Category>
      )}
    />
  );
};
