import React from 'react';

import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm(props) {
  const {
      handleAddEntry, 
      description, 
      value, 
      isExpense, 
      setDescription, 
      setValue, 
      setIsExpense 
    } = props
  
  return (
    <>
        <Form unstackable>
            <EntryForm 
                description={description} 
                value={value} 
                isExpense={isExpense}
                setDescription={setDescription} 
                setValue={setValue}
                setIsExpense={setIsExpense}
            />       
            <ButtonSaveOrCancel 
              handleAddEntry={handleAddEntry} 
            />
        </Form>
    </>
  )
}

export default NewEntryForm