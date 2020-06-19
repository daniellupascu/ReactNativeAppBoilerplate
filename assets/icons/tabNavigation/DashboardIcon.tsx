import React from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";

type PropsType = {
  color: string;
};

const DashboardIcon = ({ color }: PropsType) => {
  return (
    <View>
      <Svg
        width="19"
        height="20"
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <Rect y="12" width="5" height="8" rx="2" fill={color} />
        <Rect x="7" y="7" width="5" height="13" rx="2" fill={color} />
        <Rect x="14" width="5" height="20" rx="2" fill={color} />
      </Svg>
    </View>
  );
};

export default DashboardIcon;
