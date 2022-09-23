import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({ handleAddEntry, description: title, value, isExpense }) {  
  return (
    <Button.Group style={{marginTop: 10}}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary onClick={() => handleAddEntry(title, value, isExpense)}>Ok</Button>
      </Button.Group>
  )
}

export default ButtonSaveOrCancel