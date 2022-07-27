import * as React from "react";
import header from "../images/header.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${header})` }}></header>
      <main>
        <section className="section1 bordered"></section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
        <section className="section5"></section>
      </main>
      <footer></footer>
    </div>
  );
};

export { Home };
