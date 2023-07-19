import {React,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {Button,Row,Col,ListGroup,Image,card} from 'react-bootstrap';
import CheckOutSteps from '../components/CheckOutSteps';
const PlaceOrderScreen = () => {
  const navigate=useNavigate();
  const cart=useSelector((state)=>state.cart);
 useEffect(()=>{
  if(!cart.shippingAddress.address){
    navigate('/shipping');
  }
  else if(!cart.paymentMethod){
    navigate('/payment');
  }
 },[cart.paymentMethod,cart.shippingAddress,navigate])
  return (
    <>
      <CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>Column
        </Col>
        <Col md={4}>Column</Col>
      </Row>
      
    </>
  )
}

export default PlaceOrderScreen
