import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../Projects/ProjectsStyles'
import ProjectCard from '../cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title className='text-black dark:text-gray-50'>Projects</Title>
        <Desc className='text-black dark:text-gray-50'>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup className='text-black dark:text-gray-50'>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'prototypes' ?
            <ToggleButton active value="prototypes" onClick={() => setToggle('prototypes')}>PROTOTYPES</ToggleButton>
            :
            <ToggleButton value="prototypes" onClick={() => setToggle('prototypes')}>PROTOTYPES</ToggleButton>
          }
          <Divider />
          {toggle === 'landing pages' ?
            <ToggleButton active value="landing pages" onClick={() => setToggle('landing pages')}>LANDING PAGES</ToggleButton>
            :
            <ToggleButton value="landing pages" onClick={() => setToggle('landing pages')}>LANDING PAGES</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer className='text-black dark:text-gray-50'>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects