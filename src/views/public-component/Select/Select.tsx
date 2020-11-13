import React from "react";
import AntdSelect, {SelectProps} from "antd/lib/select";
import styles from "./Select.module.sass";
import generateClassName from "../../../services/helper/generateClassName";

interface ISelectProps extends SelectProps<any> {
    backgroundColor?: "gray"
    shape?: "round"
}

export default function Select(props: ISelectProps) {
    const {backgroundColor = "gray" , shape = "round"} = props
    const buttonClassNames = () => {
        const className = [props.className, styles.select];
        if(backgroundColor === "gray"){
            className.push(styles.backgroundGray)
        }
        if(shape === "round"){
            className.push(styles.round)
        }
        return generateClassName(className);
    };
    const newProps: SelectProps<any> = {
        ...props,
        className: buttonClassNames(),
    };
    return <AntdSelect {...newProps} />;
}
