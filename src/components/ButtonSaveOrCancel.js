import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel() {
  return (
    <Button.Group style={{marginTop: 10}}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>Ok</Button>
      </Button.Group>
  )
}

export default ButtonSaveOrCancel