import { HeaderNavMobile } from "./style"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from "@mui/material";
import { useState } from "react";
import Modal from "../Modal";

function HeaderMobile({goToList}){

  const [modal, setModal] = useState(false)

  function openModal(){
    setModal(true)
    console.log('clicou')
  }

  return (
    <HeaderNavMobile>
      {modal === true && <Modal setModal={setModal} goToList={goToList}/>}
      <IconButton onClick={openModal}>
       <MenuOutlinedIcon sx={{
          color: '#6D4BF8',
          fontSize: 70,
        }}/>
      </IconButton>
    </HeaderNavMobile>
  )
}

export default HeaderMobile