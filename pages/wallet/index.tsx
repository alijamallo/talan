import React, {Component} from 'react';
import styles from "./WalletPage.module.sass"

class Index extends Component {
    static async getInitialProps() {
        return {
            Authorization: 1,
        };
    }

    render() {
        return (
            <div>


                <span className={styles.TextDecoration}>
                    samaneh
                    <div className={styles.line}/>
                </span>
            </div>
        );
    }
}

export default Index;