import React from "react";
import AntLayout, { LayoutProps } from "antd/lib/layout";

export default function Content(props: LayoutProps) {
  const { Content } = AntLayout;
  return <Content {...props} />;
}
