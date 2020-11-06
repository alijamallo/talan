import React from "react";
import styles from "./Card.module.sass";
import { IBaseComponentProps } from "../../../models/general/IBaseComponentProps";
import generateClassName from "../../../services/helper/generateClassName";

type CardBackgroundColor = "gray" | "navy";

interface ICardProps extends IBaseComponentProps {
  backgroundColor?: CardBackgroundColor;
}

export default function Card(props: ICardProps) {
  const cardClassNames = () => {
    const cardClass = [styles.Card, props.className];
    if (props.backgroundColor === "gray") {
      cardClass.push(styles.bgGray);
    }
    if (props.backgroundColor === "navy") {
      cardClass.push(styles.bgNavy);
    }
    return generateClassName(cardClass);
  };
  return <div className={cardClassNames()}>{props.children}</div>;
}
