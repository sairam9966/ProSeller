import React from 'react'
import { Alert } from 'react-bootstrap'
const Message = ({variant,children}) => {
  return (
    <Alert variant={variant}>{children}</Alert>
    // <Alert className='alert'>{children}</Alert>

  )
}
Message.defaultProps={
variant:'light',

};
export default Message
