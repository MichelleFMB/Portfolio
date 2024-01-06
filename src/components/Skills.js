import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { skills } from '../data/constants'
import { transition1 } from '../transitions';
import { motion } from 'framer-motion';
//import cursor context
import { CursorContext } from '../context/CursorContext';

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <div id="skills" className='text-black dark:text-gray-50 lg:pb-20 flex flex-col justify-center relative z-10 items-center'>
      <motion.div 
      onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
      initial={{opacity:0, y: '-80%'}} 
      animate= {{opacity:1, y: 0}} 
      exit= {{opacity:0, y: '-80%'}} 
      transition= {{transition1}} 
      className='relative flex justify-between items-center flex-col w-full max-w-1100px gap-4 md:flex-col'>
        <h2 className='text-4xl text-center font-semibold mt-5 md:mt-3 md:text-5xl'>Skills</h2>
        <p className='text-lg text-center max-w-[600px] md:text-[1.2rem] w-[400px]'>Here are some of my skills on which I have been working on for the past 2 years.
        </p>
        <div className='w-100 flex flex-wrap mt-8 gap-8 justify-center'>
          {skills.map((skill) => (
            <Skill>
              <div className='text-[28px] font-semibold mb-[20px] text-center justify-center'>{skill.title}</div>
              <div className='flex justify-center flex-wrap gap-[12px] mb-[20px]'>
                {skill.skills.map((item) => (
                  <SkillItem className='border border-white'>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </div>
            </Skill>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Skills