import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../store/actions/item";

const AddBookScreen = () => {
  const items = useSelector((state: any) => state.items.items);
  const dispatch = useDispatch();

  const onBookAdd = () => {
    dispatch(addItem({ type: "apple", price: 30 }));
  };

  return (
    <View>
      <Text>Add Book</Text>
      <Button title={"Add Item"} onPress={onBookAdd} />
      {items.map((item: any, index: number) => (
        <Text key={index}>{item.type}</Text>
      ))}
    </View>
  );
};

export default AddBookScreen;
