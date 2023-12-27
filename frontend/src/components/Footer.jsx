import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <footer>
      <div className='footerdiv'>
      <Container >
        <Row>
          <Col className='text-center py-3 '>
            <hr />
             <p>ProSeller &copy;{currentYear}</p>
          </Col>
        </Row>
      </Container>
      </div>
    </footer>
  )
}

export default Footer
