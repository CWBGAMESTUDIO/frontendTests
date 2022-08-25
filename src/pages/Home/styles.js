import styled from "styled-components";

export const MainSection = styled.main`
  width: 100vw;
  padding: 2rem;
  
  @media(min-width: 790px){
    height: 37rem;
    display: flex;

    align-items: center;
    justify-content: center;
  }

`

export const ContainerHome = styled.section`
  width: 100%;

  div{
    gap: 3rem;

    h1{
      width: 100%;

      text-align: center;

      font-size: 3.5rem;
      font-weight: 400;

      margin-bottom: 1rem;
    }

    p{
      text-align: center;
      font-size: 1.3rem;
      font-weight: 400;
    }

    button{
      width: 100%;
      height: 3rem;

      font-family: 'Luckiest Guy';
      font-size: 1.2rem;

      margin-top: 2rem;

      border-radius: 1rem;
    }
  }

  figure{
    width: 100%;

    margin-top: 3rem;

    display: flex;
    justify-content: center;

    img{
      width: 16.5rem;
      height: 21rem;
    }
  }

  @media(min-width: 790px){
    display: flex;
   
    width:70%;

    margin-top: 3rem;

    div{
      margin: 0;
      h1{
        font-size: 3rem;
        text-align: right;
      }
      p{
        font-size: 0.8rem;
        text-align: right;
        font-weight: 400;
      }
      section{
        width: 100%;

        display: flex;
        justify-content: flex-end;
       
        button{
          width: 45%;
          font-size: 0.6rem;
        }
      }  
    }
    figure{
      margin-left: 3rem;
      margin-top: 0;
    }
  }
  @media(min-width: 960px){
    div{
      
      h1{
        font-size: 3rem;
        text-align: right;
      }
      p{
        font-size: 1.2rem;
        text-align: right;
        font-weight: 400;
      }
      section{
        button{
          font-size: 0.8rem;
        }
      }
  }
}
`