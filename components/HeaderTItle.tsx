import React from "react";

import TextComponent from "./Text";

type PropsType = {
  title: string;
};

const HeaderTitle = (props: PropsType) => {
  return <TextComponent>{props.title}</TextComponent>;
};

export default HeaderTitle;
