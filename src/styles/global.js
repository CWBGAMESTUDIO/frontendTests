import { createGlobalStyle } from 'styled-components'
import background from '../img/background.png'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
     
      :root{
        --blue: #6D4BF8;
        --white: ##FFFFFF;
        --black: #000000;
      }
    
      body{
        background-image: url(${background});
        background-size: cover;
        color: #ffffff;

        width: 100vw;
        height: auto;
        display: flex;
      }

      h1,h2, h3, p, label{
        font-family: 'Luckiest Guy';
        font-weight: 400;
      }

      button{
        cursor: pointer;
      }

      li,ul {
        list-style: none;
      }
    }
`

