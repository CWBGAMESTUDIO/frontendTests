import { useEffect, useState } from "react"
import { Api } from "../../services"
import { ContainerImg } from "./styles"
import { motion } from 'framer-motion'

function ListCards(){

  const [ cats, setCats ] = useState([])

  useEffect(() => {
    Api.get("")
      .then((response) => setCats(response.data))
      .catch((err) => console.log(err))
  }, [])

  return(
   <ContainerImg>
    <motion.ul
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {cats?.map((element) => {
        return <li key={element.id}>
            <img src={element.url} alt="" />
          </li>
        
      })}
    </motion.ul>
   </ContainerImg>
  )
}

export default ListCards