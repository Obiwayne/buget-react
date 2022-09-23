import React from 'react';

import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
  return (
    <Form unstackable>
        <Form.Group>
        <Form.Input 
            icon='tag'
            placeholder='New shinny thing' 
            width={12}
            label='Description'
        />
        <Form.Input 
            icon='pound sign'
            iconPosition='left'
            placeholder='100.00' 
            width={4}
            label='value'
        />
        </Form.Group>
        
        <ButtonSaveOrCancel />
    </Form>
  )
}

export default NewEntryForm