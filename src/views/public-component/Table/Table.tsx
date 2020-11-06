import React from "react";
import AntdTable from "antd/lib/table";
import styles from "./Table.module.sass"

export default function Table(props: any) {
  return <AntdTable className={styles.table} {...props} />;
}
