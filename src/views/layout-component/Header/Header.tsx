import React from "react";
import AntLayout, { LayoutProps } from "antd/lib/layout";
import styles from "./Header.module.sass";
import Logo from "../../public-component/Logo/Logo";
import generateClassName from "../../../services/helper/generateClassName";
import Button from "../../../../src/views/public-component/Button/Button";

export default function Header(props: LayoutProps) {
  const { Header } = AntLayout;
  const headerClassNames = () => {
    const className = [props.className, styles.header];
    return generateClassName(className);
  };
  return (
    <Header className={headerClassNames()} {...props}>
      <div className="d-flex flex-x-between">
        <div>icon</div>
        <div>
          <Button
            type="default"
            className="m-x-8"
            color="navy"
            shape="circle"
          >
              i
          </Button>

          <Button
            type="default"
            boxShadowColor="yellow"
            horizontalSize="medium"
            shape="round"
          >
            Log in
          </Button>
        </div>
      </div>
    </Header>
  );
}
