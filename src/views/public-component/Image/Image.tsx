import React from "react";
import { ImageProps } from "rc-image";
import AntdImage from "antd/lib/image";

export default function Image(props: ImageProps) {
  return <AntdImage {...props} />;
}
