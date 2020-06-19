import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardStackNavigation from "./DashboardStackNavigation";
import TrackingStackNavigation from "./TrackingStackNavigation";
import DashboardIcon from "../assets/icons/tabNavigation/DashboardIcon";
import TrackingIcon from "../assets/icons/tabNavigation/TrackingIcon";
import LoansIcon from "../assets/icons/tabNavigation/LoansIcon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "pink",
        inactiveTintColor: "#DEDEDE",
        labelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontFamily: "Poppins-Medium",
        },
        tabStyle: { width: 100 },
      }}
    >
      <Tab.Screen
        options={{
          // tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => <DashboardIcon color={color} />,
        }}
        name="Dashboard"
        component={DashboardStackNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Tracking",
          tabBarIcon: ({ color }) => <TrackingIcon color={color} />,
        }}
        name="Tracking"
        component={TrackingStackNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Loans",
          tabBarIcon: ({ color }) => <LoansIcon color={color} />,
        }}
        name="Loans"
        component={TrackingStackNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
