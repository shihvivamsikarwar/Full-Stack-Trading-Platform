import React from "react";
import Hero from "./Hero";
import Investments from "./Investments";
import StepToOpen from "./StepToOpen";
import Benefits from "./Benefits";
import Explore from "./Explore";
import Faqs from "./Faqs";
import OpenAccount from "../OpenAccount";

function Signup() {
  return (
    <>
      <Hero />
      <Investments />
      <StepToOpen />
      <Benefits />
      <Explore />
      <Faqs />
      <OpenAccount />
    </>
  );
}

export default Signup;
