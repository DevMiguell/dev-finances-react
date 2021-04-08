import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --dark-blue: #363f5f;
    --green: #49aa26;
    --light-green: #3dd705;
    --red: #e92929;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f2f5;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 93.75%;
  }

  @media (min-width: 800px) {
    html {
      font-size: 87.5%;
    }
  }
`
