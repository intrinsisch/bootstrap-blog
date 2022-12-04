import type { Component } from "solid-js";
import { Footer } from "./components/main/Footer";
import { Main } from "./components/main/Main";
import { Navbar } from "./components/main/Navbar";

export const App: Component = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};
