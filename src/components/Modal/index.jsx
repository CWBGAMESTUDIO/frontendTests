import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BackGround, Menu } from "./style";

function Modal({setModal, goToList}){

  const history = useHistory()

  const [isModalClosed, setIsModalClosed] = useState(false);

  function modalClose(){
    setIsModalClosed(true);

    setTimeout(() => {
      setModal(false)
    }, 1000);
  }

  function goToHome(){
    history.push("/")
    setModal(false)
  }


  return(
      <BackGround handleCloseUser={isModalClosed} onClick={modalClose}>
        <Menu>
          <div>
            <h1 onClick={goToHome}>Home</h1>
            <h1 onClick={goToList}>Listagem</h1>
          </div>
        </Menu>
      </BackGround>
    ) 
    
}

export default Modal