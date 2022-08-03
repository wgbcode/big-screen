import * as React from "react";
import header from "../images/header.png";
import "./home.scss";

import { Chart1 } from "../components/chart-1";
import { Chart2 } from "../components/chart-2";
import { Chart3 } from "../components/chart-3";
import { Chart4 } from "../components/chart-4";
import { Chart5 } from "../components/chart-5";

const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${header})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="section3 bordered">
          <Chart5 />
        </section>
        <section className="section4"></section>
        <section className="section5"></section>
      </main>
      <footer></footer>
    </div>
  );
};

export { Home };
