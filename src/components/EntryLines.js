import React from 'react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry, handleEditEntry, setIsOpen}) {
  return (
    <>
        {
        entries.map(entrie => (
            <EntryLine key={entrie.id} {...entrie} deleteEntry={deleteEntry} handleEditEntry={handleEditEntry} setIsOpen={setIsOpen}/>
        ))
        }
    </>
  )
}

export default EntryLines