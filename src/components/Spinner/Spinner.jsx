import React from "react";
import { SpinnerContainer, SpinnerAnimation } from "./styles";

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerAnimation role="progressbar" aria-label="Loading..." />
  </SpinnerContainer>
);

export default Spinner;
