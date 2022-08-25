import styled, { css } from "styled-components";

export const BackGround = styled.div`
  inset: 0;

  width: 100%;

  z-index: 1;

  background-color: rgba(255,255,255, 0.3);

  position: fixed;

  display: flex;
  justify-content: flex-end;

  animation: appearBackGround 1s;
  
  ${({ handleCloseUser }) =>
    handleCloseUser &&
    css`
      animation: desappearBackGround 1s;
    `}

  @keyframes appearBackGround {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes desappearBackGround {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

export const Menu = styled.section`
  width: 50%;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: appearFromRight 1s;

  div{

    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      cursor: pointer;

      margin-bottom: 1.3rem;
      :hover{
        color: var(--blue)
      }
    }
  }
`

