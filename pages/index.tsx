import React, { Component } from "react";
import Head from "next/head";
import LandingDownloadApp from "../src/views/special-component/Landing/DownloadApp/LandingDownloadApp";
import LandingMarkets from "../src/views/special-component/Landing/Markets/LandingMarkets";
import LandingTradeStake from "../src/views/special-component/Landing/TradeStake/LandingTradeStake";
import LandingBuyBTC from "../src/views/special-component/Landing/BuyBTC/LandingBuyBTC";

class Home extends Component {
  render() {
    return (
      <> 
        <Head>
          <title>Talan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LandingBuyBTC />
        <LandingTradeStake />
        <LandingMarkets />
        <LandingDownloadApp />
      </>
    );
  }
}

export default Home;
