import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TrackingScreen from "../screens/TrackingScreen";
import { headerStyle } from "../styles/headerStyles";
import HeaderTitle from "../components/HeaderTItle";

const Stack = createStackNavigator();

const TrackingStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle,
      }}
    >
      <Stack.Screen
        name="Tracking"
        component={TrackingScreen}
        options={{
          headerTitle: (props) => <HeaderTitle {...props} title="Tracking" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default TrackingStackNavigation;
