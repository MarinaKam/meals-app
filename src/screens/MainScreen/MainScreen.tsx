import { FC } from "react";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../../components";
import { CATEGORIES } from "../../dummy-data/dummy-data";
import { CategoryInterface } from "../../models/category";

type ItemDataType = {
  item: CategoryInterface;
};
const renderItem = ({ item }: ItemDataType) => {
  return <CategoryGridTile title={item?.title} color={item?.color} />;
};

export const MainScreen: FC = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};
