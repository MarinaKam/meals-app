import { FC } from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { CategoryInterface } from "../../models/category";

type CategoryGridTileType = Pick<CategoryInterface, "title" | "color">;

export const CategoryGridTile: FC<CategoryGridTileType> = ({
  title,
  color,
}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#eee" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerWrapper, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    // TODO: ios styles for shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerWrapper: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
