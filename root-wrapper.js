import React from "React"
import { createGlobalStyle } from "styled-components"
import Layout from "./src/components/layout"
import { GatsbyProvider } from "./src/context/context"

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/

  --clr-primary-1: hsl(242, 51%, 20%);
  --clr-primary-2: hsl(243, 49%, 28%);
  --clr-primary-3: hsl(243, 47%, 38%);
  --clr-primary-4: hsl(243, 46%, 50%);
  --clr-primary-5: hsl(243, 100%, 69%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(243, 100%, 76%);
  --clr-primary-7: hsl(243, 96%, 80%);
  --clr-primary-8: hsl(243, 88%, 83%);
  --clr-primary-9: hsl(243, 82%, 89%);
  --clr-primary-10: hsl(245, 57%, 95%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(206, 33%, 96%);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-green-light: hsl(134, 41%, 88%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-white: #fff;
  --clr-black: #0a0c10;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}

/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-primary);
  background: var(--clr-white);
  color: var(--clr-black);
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  line-height: 1.25;
  font-family: var(--ff-primary);
  line-height: 1.25;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}


`

export const wrapPageElement = ({ element, props }) => {
  return (
    <GatsbyProvider>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </GatsbyProvider>
  )
}
