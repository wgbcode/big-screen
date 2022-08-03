import * as React from "react";
import header from "../images/header.png";
import "./home.scss";

import { Chart1 } from "../components/chart-1";
import { Chart2 } from "../components/chart-2";
import { Chart3 } from "../components/chart-3";
import { Chart4 } from "../components/chart-4";
import { Chart5 } from "../components/chart-5";
import { Chart6 } from "../components/chart-6";
import { Chart7 } from "../components/chart-7";
// import { Chart8 } from "../components/chart-8";
// import { Chart9 } from "../components/chart-9";

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
        <section className="section4">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              {/* <Chart8 />
              <Chart9 /> */}
            </div>
          </div>
        </section>
        <section className="section5"></section>
      </main>
      <footer></footer>
    </div>
  );
};

export { Home };
