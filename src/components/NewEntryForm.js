import React from 'react';
import { useState } from 'react';

import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({handleAddEntry}) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
  return (
    <Form unstackable>
        <Form.Group>
        <Form.Input 
            icon='tag'
            placeholder='New shinny thing' 
            width={12}
            label='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input 
            icon='pound sign'
            iconPosition='left'
            placeholder='100.00' 
            width={4}
            label='value'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        </Form.Group>

        <Segment compact>
            <Checkbox 
                toggle 
                label="is expense" 
                checked={isExpense} 
                onChange={() => setIsExpense(!isExpense)}
            />
        </Segment>
        
        <ButtonSaveOrCancel handleAddEntry={handleAddEntry} description={description} value={value} isExpense={isExpense}/>
    </Form>
  )
}

export default NewEntryForm