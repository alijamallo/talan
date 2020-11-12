import React from "react";
import AndButton, {ButtonProps} from "antd/lib/button";
import styles from "./Button.module.sass";
import generateClassName from "../../../services/helper/generateClassName";

interface IButtonProps extends ButtonProps {
    boxShadowColor?: "yellow";
    color?: "navy";
    horizontalSize?: "medium" | "large";
}

export default function Button(props: IButtonProps) {
    const buttonClassNames = () => {
        const className = [props.className, styles.button];
        if (props.color === "navy") {
            className.push(styles.navy);
        }
        if (props.boxShadowColor === "yellow") {
            className.push("boxShadowYellow");
        }
        if (props.horizontalSize === "medium") {
            className.push(styles.horizontalSizeMedium);
        }
        if (props.horizontalSize === "large") {
            className.push(styles.horizontalSizeLarge);
        }
        if (props.color === "navy") {
            className.push(styles.navy);
        }
        return generateClassName(className);
    };
    const newProps: ButtonProps = {
        ...props,
        className: buttonClassNames(),
    };
    delete newProps["boxShadowColor"];
    delete newProps["horizontalSize"];
    return <AndButton {...newProps} />;
}
