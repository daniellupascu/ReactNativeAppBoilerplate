import React from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";

type PropsType = {
  color: string;
};

const LoansIcon = ({ color }: PropsType) => {
  return (
    <View>
      <Svg
        width="25"
        height="25"
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <Rect width="5" height="20" rx="2" fill={color} />
        <Rect x="7" width="5" height="20" rx="2" fill={color} />
        <Rect
          x="14"
          y=".858154"
          width="5"
          height="20"
          rx="2"
          transform="rotate(-9.883 14 .858154)"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default LoansIcon;
