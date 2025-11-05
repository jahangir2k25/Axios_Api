import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const About = () => {
  return (
    <div>
      <Container>
        <BreadCrumb />
        <p className='text-center'>This is About Page</p>
      </Container>
    </div>
  )
}

export default About;
