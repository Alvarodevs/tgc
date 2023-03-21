import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Archivo&family=Montserrat&display=swap');
   
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      
      // colors
      --grey: #808080;
      --lightGrey: #d3d3d3;
      --blue: #101cb9;
      --lightBlue: #a1e5fa;
      --white: #ffffff;
      --black: #0c0c0c;
      --yellow: #f7f32f;
      // Font sizes
      --font-size-s: 0.8rem;
      --font-size-m: 1rem;
      --font-size-l: 1.2rem;
      --font-size-xl: 1.8rem;
      --font-size-xxl: 2rem;
      //Fonts
      --main-font: 'Archivo', sans-serif;
      --secondary-font: 'Montserrat', sans-serif;
   }
 
   #root{
      min-width: 320px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
`

export default GlobalStyle
