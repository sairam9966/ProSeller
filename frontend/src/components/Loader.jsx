import { Spinner } from "react-bootstrap";

import React from 'react'

const Loader = () => {
  return (
    <Spinner animation="border" role="staus"
    style={{
      width:'100px',
      height:'100px',
      margin:"Auto",
      display:"block",
    }}
    ></Spinner>
  );
};

export default Loader
