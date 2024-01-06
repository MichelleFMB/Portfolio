import React, {useState} from 'react'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails/index'

const Portfolio = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <div>
    <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state &&
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      }
  </div>
  )
}

export default Portfolio