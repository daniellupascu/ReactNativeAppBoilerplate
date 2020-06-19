import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import TabNavigation from "./navigation/BottomTabNavigation";
import { useLoadFonts } from "./hooks/loadFonts";
import itemsReducer from "./store/reducers/itemsReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
