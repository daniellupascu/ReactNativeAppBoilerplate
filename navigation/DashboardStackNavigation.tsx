import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/DashboardScreen";
import AddBookScreen from "../screens/AddBookScreen";
import { headerStyle } from "../styles/headerStyles";
import HeaderTitle from "../components/HeaderTItle";

const Stack = createStackNavigator();

const DashboardStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerTitle: (props) => <HeaderTitle {...props} title="Dashboard" />,
        }}
      />
      <Stack.Screen
        name="AddBook"
        component={AddBookScreen}
        options={{
          headerTitle: (props) => <HeaderTitle {...props} title="Add Book" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardStackNavigation;
