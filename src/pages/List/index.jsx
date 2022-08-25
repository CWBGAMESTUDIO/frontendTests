import HeaderDesktop from "../../components/HeaderDesktop"
import HeaderMobile from "../../components/HeaderMobile"
import ListCards from "../../components/ListCards"
import { ContainerCards } from "./styles"

function List(){
  return(
    <>
      <HeaderDesktop/>
      <HeaderMobile/>
      <ContainerCards>
        <ListCards/>      
      </ContainerCards>
    </>
  )
}

export default List