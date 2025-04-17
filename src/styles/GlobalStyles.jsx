import { css, Global } from "@emotion/react";
import React from "react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Titillium Web", sans-serif;
        background-color: #171717;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      * {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}
  />
);
