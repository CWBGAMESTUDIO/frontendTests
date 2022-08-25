import { useHistory } from "react-router-dom"
import { NavDesk } from "./styles"
import { motion } from 'framer-motion'

function HeaderDesktop({goToList}){

  const history = useHistory()

  function goToHome(){
    history.push("/")
  }

  return(
    <NavDesk>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <h1 onClick={goToHome}>Home</h1>
        <h1 onClick={goToList}>List</h1>
      </motion.div>
    </NavDesk>
  )
}

export default HeaderDesktop