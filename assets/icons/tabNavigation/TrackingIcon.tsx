import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type PropsType = {
  color: string;
};

const TrackingIcon = ({ color }: PropsType) => {
  return (
    <View>
      <Svg
        width="20"
        height="20"
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="10" cy="10" r="4" fill={color} />
        <Circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2" />
      </Svg>
    </View>
  );
};

export default TrackingIcon;
