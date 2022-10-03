import React from 'react';
import {  Grid,  Icon, Segment,  } from 'semantic-ui-react';



function EntryLine(props) {
    const { id, description, value, isExpense, deleteEntry, handleEditEntry, setIsOpen } = props;
  return (
    <>
    <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign='right' >
        <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>£{value}</Grid.Column>
            <Grid.Column width={3}>
                <Icon name='edit' bordered onClick={() => handleEditEntry(id)}/>
                <Icon name='trash' bordered onClick={() => deleteEntry(id)}/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
  </Segment>
  </>  
  
  )
}

export default EntryLine