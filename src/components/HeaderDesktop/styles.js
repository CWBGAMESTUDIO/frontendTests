import styled from "styled-components";

export const NavDesk = styled.nav`
  width: 100vw;

  padding: 2rem;

  display: none;
  justify-content: flex-end;

  div{
    display: flex;
    gap: 6rem;

    margin-right: 8rem;

    h1{
      cursor: pointer;

      :hover{
        color: var(--blue)
      }
    }
  }
  @media(min-width: 768px){
    display: flex;
  }
`